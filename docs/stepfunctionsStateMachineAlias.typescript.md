# `stepfunctionsStateMachineAlias` Submodule <a name="`stepfunctionsStateMachineAlias` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachineAlias <a name="StepfunctionsStateMachineAlias" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias(scope: Construct, id: string, config?: StepfunctionsStateMachineAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig">StepfunctionsStateMachineAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig">StepfunctionsStateMachineAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference">putDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration">putRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference">resetDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration">resetRoutingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn">resetStateMachineArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeploymentPreference` <a name="putDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference"></a>

```typescript
public putDeploymentPreference(value: StepfunctionsStateMachineAliasDeploymentPreference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putDeploymentPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `putRoutingConfiguration` <a name="putRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration"></a>

```typescript
public putRoutingConfiguration(value: IResolvable | StepfunctionsStateMachineAliasRoutingConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.putRoutingConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

---

##### `resetDeploymentPreference` <a name="resetDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDeploymentPreference"></a>

```typescript
public resetDeploymentPreference(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoutingConfiguration` <a name="resetRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetRoutingConfiguration"></a>

```typescript
public resetRoutingConfiguration(): void
```

##### `resetStateMachineArn` <a name="resetStateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.resetStateMachineArn"></a>

```typescript
public resetStateMachineArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StepfunctionsStateMachineAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StepfunctionsStateMachineAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachineAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference">deploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration">routingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput">deploymentPreferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput">routingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput">stateMachineArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deploymentPreference`<sup>Required</sup> <a name="deploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreference"></a>

```typescript
public readonly deploymentPreference: StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfiguration"></a>

```typescript
public readonly routingConfiguration: StepfunctionsStateMachineAliasRoutingConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList">StepfunctionsStateMachineAliasRoutingConfigurationList</a>

---

##### `deploymentPreferenceInput`<sup>Optional</sup> <a name="deploymentPreferenceInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.deploymentPreferenceInput"></a>

```typescript
public readonly deploymentPreferenceInput: IResolvable | StepfunctionsStateMachineAliasDeploymentPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routingConfigurationInput`<sup>Optional</sup> <a name="routingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.routingConfigurationInput"></a>

```typescript
public readonly routingConfigurationInput: IResolvable | StepfunctionsStateMachineAliasRoutingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

---

##### `stateMachineArnInput`<sup>Optional</sup> <a name="stateMachineArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArnInput"></a>

```typescript
public readonly stateMachineArnInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineAliasConfig <a name="StepfunctionsStateMachineAliasConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineAliasConfig: stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference">deploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | The settings to enable gradual state machine deployments. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description">description</a></code> | <code>string</code> | An optional description of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name">name</a></code> | <code>string</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration">routingConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]</code> | The routing configuration of the alias. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deploymentPreference`<sup>Optional</sup> <a name="deploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.deploymentPreference"></a>

```typescript
public readonly deploymentPreference: StepfunctionsStateMachineAliasDeploymentPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

The settings to enable gradual state machine deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#deployment_preference StepfunctionsStateMachineAlias#deployment_preference}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#description StepfunctionsStateMachineAlias#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#name StepfunctionsStateMachineAlias#name}

---

##### `routingConfiguration`<sup>Optional</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.routingConfiguration"></a>

```typescript
public readonly routingConfiguration: IResolvable | StepfunctionsStateMachineAliasRoutingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

The routing configuration of the alias.

One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#routing_configuration StepfunctionsStateMachineAlias#routing_configuration}

---

##### `stateMachineArn`<sup>Optional</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasConfig.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#state_machine_arn StepfunctionsStateMachineAlias#state_machine_arn}.

---

### StepfunctionsStateMachineAliasDeploymentPreference <a name="StepfunctionsStateMachineAliasDeploymentPreference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineAliasDeploymentPreference: stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms">alarms</a></code> | <code>string[]</code> | A list of CloudWatch alarm names that will be monitored during the deployment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval">interval</a></code> | <code>number</code> | The time in minutes between each traffic shifting increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage">percentage</a></code> | <code>number</code> | The percentage of traffic to shift to the new version in each increment. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type">type</a></code> | <code>string</code> | The type of deployment to perform. |

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

A list of CloudWatch alarm names that will be monitored during the deployment.

The deployment will fail and rollback if any alarms go into ALARM state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#alarms StepfunctionsStateMachineAlias#alarms}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

The time in minutes between each traffic shifting increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#interval StepfunctionsStateMachineAlias#interval}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

The percentage of traffic to shift to the new version in each increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#percentage StepfunctionsStateMachineAlias#percentage}

---

##### `stateMachineVersionArn`<sup>Optional</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of deployment to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#type StepfunctionsStateMachineAlias#type}

---

### StepfunctionsStateMachineAliasRoutingConfiguration <a name="StepfunctionsStateMachineAliasRoutingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineAliasRoutingConfiguration: stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight">weight</a></code> | <code>number</code> | The percentage of traffic you want to route to the state machine version. |

---

##### `stateMachineVersionArn`<sup>Optional</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#state_machine_version_arn StepfunctionsStateMachineAlias#state_machine_version_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The percentage of traffic you want to route to the state machine version.

The sum of the weights in the routing configuration must be equal to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/stepfunctions_state_machine_alias#weight StepfunctionsStateMachineAlias#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference <a name="StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms">resetAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn">resetStateMachineVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarms` <a name="resetAlarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetAlarms"></a>

```typescript
public resetAlarms(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```

##### `resetStateMachineVersionArn` <a name="resetStateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetStateMachineVersionArn"></a>

```typescript
public resetStateMachineVersionArn(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput">alarmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput">stateMachineVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmsInput`<sup>Optional</sup> <a name="alarmsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarmsInput"></a>

```typescript
public readonly alarmsInput: string[];
```

- *Type:* string[]

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `stateMachineVersionArnInput`<sup>Optional</sup> <a name="stateMachineVersionArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArnInput"></a>

```typescript
public readonly stateMachineVersionArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineAliasDeploymentPreference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasDeploymentPreference">StepfunctionsStateMachineAliasDeploymentPreference</a>

---


### StepfunctionsStateMachineAliasRoutingConfigurationList <a name="StepfunctionsStateMachineAliasRoutingConfigurationList" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get"></a>

```typescript
public get(index: number): StepfunctionsStateMachineAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineAliasRoutingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>[]

---


### StepfunctionsStateMachineAliasRoutingConfigurationOutputReference <a name="StepfunctionsStateMachineAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer"></a>

```typescript
import { stepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn">resetStateMachineVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStateMachineVersionArn` <a name="resetStateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetStateMachineVersionArn"></a>

```typescript
public resetStateMachineVersionArn(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput">stateMachineVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateMachineVersionArnInput`<sup>Optional</sup> <a name="stateMachineVersionArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArnInput"></a>

```typescript
public readonly stateMachineVersionArnInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StepfunctionsStateMachineAliasRoutingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineAlias.StepfunctionsStateMachineAliasRoutingConfiguration">StepfunctionsStateMachineAliasRoutingConfiguration</a>

---



