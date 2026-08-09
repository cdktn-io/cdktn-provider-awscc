# `bedrockagentcoreCodeInterpreterCustom` Submodule <a name="`bedrockagentcoreCodeInterpreterCustom` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreterCustom <a name="BedrockagentcoreCodeInterpreterCustom" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom awscc_bedrockagentcore_code_interpreter_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom(scope: Construct, id: string, config: BedrockagentcoreCodeInterpreterCustomConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig">BedrockagentcoreCodeInterpreterCustomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig">BedrockagentcoreCodeInterpreterCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates">putCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificates` <a name="putCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates"></a>

```typescript
public putCertificates(value: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: BedrockagentcoreCodeInterpreterCustomNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---

##### `resetCertificates` <a name="resetCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetCertificates"></a>

```typescript
public resetCertificates(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreCodeInterpreterCustom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreCodeInterpreterCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreterCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList">BedrockagentcoreCodeInterpreterCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn">codeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificatesInput">certificatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificates"></a>

```typescript
public readonly certificates: BedrockagentcoreCodeInterpreterCustomCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList">BedrockagentcoreCodeInterpreterCustomCertificatesList</a>

---

##### `codeInterpreterArn`<sup>Required</sup> <a name="codeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn"></a>

```typescript
public readonly codeInterpreterArn: string;
```

- *Type:* string

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | BedrockagentcoreCodeInterpreterCustomNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterCustomCertificates <a name="BedrockagentcoreCodeInterpreterCustomCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreCodeInterpreterCustomCertificates: bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | Certificate location in Secrets Manager. |

---

##### `certificateLocation`<sup>Optional</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.property.certificateLocation"></a>

```typescript
public readonly certificateLocation: BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

Certificate location in Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificate_location BedrockagentcoreCodeInterpreterCustom#certificate_location}

---

### BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation <a name="BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation: bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.property.secretArn">secretArn</a></code> | <code>string</code> | Secrets Manager secret ARN. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Secrets Manager secret ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#secret_arn BedrockagentcoreCodeInterpreterCustom#secret_arn}

---

### BedrockagentcoreCodeInterpreterCustomConfig <a name="BedrockagentcoreCodeInterpreterCustomConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreCodeInterpreterCustomConfig: bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.name">name</a></code> | <code>string</code> | The name of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | Network configuration for code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.certificates">certificates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]</code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.description">description</a></code> | <code>string</code> | The description of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the code interpreter uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#name BedrockagentcoreCodeInterpreterCustom#name}

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreCodeInterpreterCustomNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

Network configuration for code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_configuration BedrockagentcoreCodeInterpreterCustom#network_configuration}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.certificates"></a>

```typescript
public readonly certificates: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificates BedrockagentcoreCodeInterpreterCustom#certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#description BedrockagentcoreCodeInterpreterCustom#description}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The ARN of the IAM role that the code interpreter uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#execution_role_arn BedrockagentcoreCodeInterpreterCustom#execution_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#tags BedrockagentcoreCodeInterpreterCustom#tags}

---

### BedrockagentcoreCodeInterpreterCustomNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreCodeInterpreterCustomNetworkConfiguration: bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>string</code> | Network modes supported by code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | Network mode configuration for VPC. |

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Network modes supported by code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_mode BedrockagentcoreCodeInterpreterCustom#network_mode}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#vpc_config BedrockagentcoreCodeInterpreterCustom#vpc_config}

---

### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig: bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Subnets for VPC. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#security_groups BedrockagentcoreCodeInterpreterCustom#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#subnets BedrockagentcoreCodeInterpreterCustom#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference <a name="BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---


### BedrockagentcoreCodeInterpreterCustomCertificatesList <a name="BedrockagentcoreCodeInterpreterCustomCertificatesList" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get"></a>

```typescript
public get(index: number): BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

---


### BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference <a name="BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation">putCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resetCertificateLocation">resetCertificateLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateLocation` <a name="putCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation"></a>

```typescript
public putCertificateLocation(value: BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---

##### `resetCertificateLocation` <a name="resetCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resetCertificateLocation"></a>

```typescript
public resetCertificateLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocationInput">certificateLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateLocation`<sup>Required</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation"></a>

```typescript
public readonly certificateLocation: BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a>

---

##### `certificateLocationInput`<sup>Optional</sup> <a name="certificateLocationInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocationInput"></a>

```typescript
public readonly certificateLocationInput: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterCustomCertificates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>

---


### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterCustomNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---


### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---



