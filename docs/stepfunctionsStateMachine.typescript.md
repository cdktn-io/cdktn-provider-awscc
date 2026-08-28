# `stepfunctionsStateMachine` Submodule <a name="`stepfunctionsStateMachine` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachine <a name="StepfunctionsStateMachine" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine awscc_stepfunctions_state_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachine(scope: Construct, id: string, config: StepfunctionsStateMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig">StepfunctionsStateMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig">StepfunctionsStateMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location">putDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration">putTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location">resetDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString">resetDefinitionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions">resetDefinitionSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName">resetStateMachineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType">resetStateMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration">resetTracingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinitionS3Location` <a name="putDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location"></a>

```typescript
public putDefinitionS3Location(value: StepfunctionsStateMachineDefinitionS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(value: StepfunctionsStateMachineLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags"></a>

```typescript
public putTags(value: IResolvable | StepfunctionsStateMachineTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

---

##### `putTracingConfiguration` <a name="putTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration"></a>

```typescript
public putTracingConfiguration(value: StepfunctionsStateMachineTracingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetDefinitionS3Location` <a name="resetDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location"></a>

```typescript
public resetDefinitionS3Location(): void
```

##### `resetDefinitionString` <a name="resetDefinitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString"></a>

```typescript
public resetDefinitionString(): void
```

##### `resetDefinitionSubstitutions` <a name="resetDefinitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions"></a>

```typescript
public resetDefinitionSubstitutions(): void
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration"></a>

```typescript
public resetLoggingConfiguration(): void
```

##### `resetStateMachineName` <a name="resetStateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName"></a>

```typescript
public resetStateMachineName(): void
```

##### `resetStateMachineType` <a name="resetStateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType"></a>

```typescript
public resetStateMachineType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTracingConfiguration` <a name="resetTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration"></a>

```typescript
public resetTracingConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StepfunctionsStateMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StepfunctionsStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput">definitionS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput">definitionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput">definitionSubstitutionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput">stateMachineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput">stateMachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput">tracingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString">definitionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions">definitionSubstitutions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType">stateMachineType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `definitionS3Location`<sup>Required</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location"></a>

```typescript
public readonly definitionS3Location: StepfunctionsStateMachineDefinitionS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: StepfunctionsStateMachineLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags"></a>

```typescript
public readonly tags: StepfunctionsStateMachineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: StepfunctionsStateMachineTracingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a>

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `definitionS3LocationInput`<sup>Optional</sup> <a name="definitionS3LocationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput"></a>

```typescript
public readonly definitionS3LocationInput: IResolvable | StepfunctionsStateMachineDefinitionS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `definitionStringInput`<sup>Optional</sup> <a name="definitionStringInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput"></a>

```typescript
public readonly definitionStringInput: string;
```

- *Type:* string

---

##### `definitionSubstitutionsInput`<sup>Optional</sup> <a name="definitionSubstitutionsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput"></a>

```typescript
public readonly definitionSubstitutionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput"></a>

```typescript
public readonly loggingConfigurationInput: IResolvable | StepfunctionsStateMachineLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stateMachineNameInput`<sup>Optional</sup> <a name="stateMachineNameInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput"></a>

```typescript
public readonly stateMachineNameInput: string;
```

- *Type:* string

---

##### `stateMachineTypeInput`<sup>Optional</sup> <a name="stateMachineTypeInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput"></a>

```typescript
public readonly stateMachineTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | StepfunctionsStateMachineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

---

##### `tracingConfigurationInput`<sup>Optional</sup> <a name="tracingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput"></a>

```typescript
public readonly tracingConfigurationInput: IResolvable | StepfunctionsStateMachineTracingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `definitionString`<sup>Required</sup> <a name="definitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString"></a>

```typescript
public readonly definitionString: string;
```

- *Type:* string

---

##### `definitionSubstitutions`<sup>Required</sup> <a name="definitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions"></a>

```typescript
public readonly definitionSubstitutions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

---

##### `stateMachineType`<sup>Required</sup> <a name="stateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineConfig <a name="StepfunctionsStateMachineConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineConfig: stepfunctionsStateMachine.StepfunctionsStateMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString">definitionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions">definitionSubstitutions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType">stateMachineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}.

---

##### `definitionS3Location`<sup>Optional</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location"></a>

```typescript
public readonly definitionS3Location: StepfunctionsStateMachineDefinitionS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}.

---

##### `definitionString`<sup>Optional</sup> <a name="definitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString"></a>

```typescript
public readonly definitionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}.

---

##### `definitionSubstitutions`<sup>Optional</sup> <a name="definitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions"></a>

```typescript
public readonly definitionSubstitutions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: StepfunctionsStateMachineLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}.

---

##### `stateMachineName`<sup>Optional</sup> <a name="stateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}.

---

##### `stateMachineType`<sup>Optional</sup> <a name="stateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | StepfunctionsStateMachineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}.

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: StepfunctionsStateMachineTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}.

---

### StepfunctionsStateMachineDefinitionS3Location <a name="StepfunctionsStateMachineDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineDefinitionS3Location: stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}.

---

### StepfunctionsStateMachineLoggingConfiguration <a name="StepfunctionsStateMachineLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineLoggingConfiguration: stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData">includeExecutionData</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations"></a>

```typescript
public readonly destinations: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}.

---

##### `includeExecutionData`<sup>Optional</sup> <a name="includeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```typescript
public readonly includeExecutionData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinations <a name="StepfunctionsStateMachineLoggingConfigurationDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineLoggingConfigurationDestinations: stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup">cloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}. |

---

##### `cloudwatchLogsLogGroup`<sup>Optional</sup> <a name="cloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup"></a>

```typescript
public readonly cloudwatchLogsLogGroup: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup: stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}.

---

### StepfunctionsStateMachineTags <a name="StepfunctionsStateMachineTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineTags: stepfunctionsStateMachine.StepfunctionsStateMachineTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}.

---

### StepfunctionsStateMachineTracingConfiguration <a name="StepfunctionsStateMachineTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineTracingConfiguration: stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineDefinitionS3LocationOutputReference <a name="StepfunctionsStateMachineDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineDefinitionS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn"></a>

```typescript
public resetLogGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsList <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get"></a>

```typescript
public get(index: number): StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup">putCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup">resetCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsLogGroup` <a name="putCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup"></a>

```typescript
public putCloudwatchLogsLogGroup(value: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `resetCloudwatchLogsLogGroup` <a name="resetCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup"></a>

```typescript
public resetCloudwatchLogsLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup">cloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput">cloudwatchLogsLogGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroup`<sup>Required</sup> <a name="cloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup"></a>

```typescript
public readonly cloudwatchLogsLogGroup: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a>

---

##### `cloudwatchLogsLogGroupInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput"></a>

```typescript
public readonly cloudwatchLogsLogGroupInput: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>

---


### StepfunctionsStateMachineLoggingConfigurationOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">resetIncludeExecutionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations"></a>

```typescript
public putDestinations(value: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetIncludeExecutionData` <a name="resetIncludeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```typescript
public resetIncludeExecutionData(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">includeExecutionDataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">includeExecutionData</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations"></a>

```typescript
public readonly destinations: StepfunctionsStateMachineLoggingConfigurationDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>[]

---

##### `includeExecutionDataInput`<sup>Optional</sup> <a name="includeExecutionDataInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```typescript
public readonly includeExecutionDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `includeExecutionData`<sup>Required</sup> <a name="includeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```typescript
public readonly includeExecutionData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---


### StepfunctionsStateMachineTagsList <a name="StepfunctionsStateMachineTagsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get"></a>

```typescript
public get(index: number): StepfunctionsStateMachineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>[]

---


### StepfunctionsStateMachineTagsOutputReference <a name="StepfunctionsStateMachineTagsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>

---


### StepfunctionsStateMachineTracingConfigurationOutputReference <a name="StepfunctionsStateMachineTracingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachine } from '@cdktn/provider-awscc'

new stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineTracingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---



