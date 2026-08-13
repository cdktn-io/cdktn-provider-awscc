# `ivsStage` Submodule <a name="`ivsStage` Submodule" id="@cdktn/provider-awscc.ivsStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsStage <a name="IvsStage" id="@cdktn/provider-awscc.ivsStage.IvsStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage awscc_ivs_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStage(scope: Construct, id: string, config?: IvsStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig">IvsStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ivsStage.IvsStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig">IvsStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration">putAutoParticipantRecordingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetAutoParticipantRecordingConfiguration">resetAutoParticipantRecordingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsStage.IvsStage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsStage.IvsStage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsStage.IvsStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsStage.IvsStage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsStage.IvsStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsStage.IvsStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsStage.IvsStage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsStage.IvsStage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoParticipantRecordingConfiguration` <a name="putAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration"></a>

```typescript
public putAutoParticipantRecordingConfiguration(value: IvsStageAutoParticipantRecordingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.putAutoParticipantRecordingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsStage.IvsStage.putTags"></a>

```typescript
public putTags(value: IResolvable | IvsStageTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]

---

##### `resetAutoParticipantRecordingConfiguration` <a name="resetAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetAutoParticipantRecordingConfiguration"></a>

```typescript
public resetAutoParticipantRecordingConfiguration(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsStage.IvsStage.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsStage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

ivsStage.IvsStage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

ivsStage.IvsStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

ivsStage.IvsStage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsStage.IvsStage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

ivsStage.IvsStage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IvsStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.activeSessionId">activeSessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfiguration">autoParticipantRecordingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList">IvsStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfigurationInput">autoParticipantRecordingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activeSessionId`<sup>Required</sup> <a name="activeSessionId" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.activeSessionId"></a>

```typescript
public readonly activeSessionId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoParticipantRecordingConfiguration`<sup>Required</sup> <a name="autoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfiguration"></a>

```typescript
public readonly autoParticipantRecordingConfiguration: IvsStageAutoParticipantRecordingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tags"></a>

```typescript
public readonly tags: IvsStageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList">IvsStageTagsList</a>

---

##### `autoParticipantRecordingConfigurationInput`<sup>Optional</sup> <a name="autoParticipantRecordingConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.autoParticipantRecordingConfigurationInput"></a>

```typescript
public readonly autoParticipantRecordingConfigurationInput: IResolvable | IvsStageAutoParticipantRecordingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IvsStageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsStage.IvsStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsStageAutoParticipantRecordingConfiguration <a name="IvsStageAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageAutoParticipantRecordingConfiguration: ivsStage.IvsStageAutoParticipantRecordingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.hlsConfiguration">hlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | HLS configuration object for individual participant recording. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.mediaTypes">mediaTypes</a></code> | <code>string[]</code> | Types of media to be recorded. Default: AUDIO_VIDEO. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.recordingReconnectWindowSeconds">recordingReconnectWindowSeconds</a></code> | <code>number</code> | If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.storageConfigurationArn">storageConfigurationArn</a></code> | <code>string</code> | ARN of the StorageConfiguration resource to use for individual participant recording. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.thumbnailConfiguration">thumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session. |

---

##### `hlsConfiguration`<sup>Optional</sup> <a name="hlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.hlsConfiguration"></a>

```typescript
public readonly hlsConfiguration: IvsStageAutoParticipantRecordingConfigurationHlsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

HLS configuration object for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#hls_configuration IvsStage#hls_configuration}

---

##### `mediaTypes`<sup>Optional</sup> <a name="mediaTypes" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.mediaTypes"></a>

```typescript
public readonly mediaTypes: string[];
```

- *Type:* string[]

Types of media to be recorded. Default: AUDIO_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#media_types IvsStage#media_types}

---

##### `recordingReconnectWindowSeconds`<sup>Optional</sup> <a name="recordingReconnectWindowSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```typescript
public readonly recordingReconnectWindowSeconds: number;
```

- *Type:* number

If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together.

The default value is 0, which disables merging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#recording_reconnect_window_seconds IvsStage#recording_reconnect_window_seconds}

---

##### `storageConfigurationArn`<sup>Optional</sup> <a name="storageConfigurationArn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.storageConfigurationArn"></a>

```typescript
public readonly storageConfigurationArn: string;
```

- *Type:* string

ARN of the StorageConfiguration resource to use for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#storage_configuration_arn IvsStage#storage_configuration_arn}

---

##### `thumbnailConfiguration`<sup>Optional</sup> <a name="thumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration.property.thumbnailConfiguration"></a>

```typescript
public readonly thumbnailConfiguration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

A complex type that allows you to enable/disable the recording of thumbnails for individual participant recording and modify the interval at which thumbnails are generated for the live session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#thumbnail_configuration IvsStage#thumbnail_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationHlsConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageAutoParticipantRecordingConfigurationHlsConfiguration: ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.property.participantRecordingHlsConfiguration">participantRecordingHlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | An object representing a configuration of participant HLS recordings for individual participant recording. |

---

##### `participantRecordingHlsConfiguration`<sup>Optional</sup> <a name="participantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration.property.participantRecordingHlsConfiguration"></a>

```typescript
public readonly participantRecordingHlsConfiguration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

An object representing a configuration of participant HLS recordings for individual participant recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#participant_recording_hls_configuration IvsStage#participant_recording_hls_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration: ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.property.targetSegmentDurationSeconds">targetSegmentDurationSeconds</a></code> | <code>number</code> | Defines the target duration for recorded segments generated when recording a stage participant. |

---

##### `targetSegmentDurationSeconds`<sup>Optional</sup> <a name="targetSegmentDurationSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.property.targetSegmentDurationSeconds"></a>

```typescript
public readonly targetSegmentDurationSeconds: number;
```

- *Type:* number

Defines the target duration for recorded segments generated when recording a stage participant.

Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#target_segment_duration_seconds IvsStage#target_segment_duration_seconds}

---

### IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageAutoParticipantRecordingConfigurationThumbnailConfiguration: ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.property.participantThumbnailConfiguration">participantThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | An object representing a configuration of thumbnails for recorded video from an individual participant. |

---

##### `participantThumbnailConfiguration`<sup>Optional</sup> <a name="participantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.property.participantThumbnailConfiguration"></a>

```typescript
public readonly participantThumbnailConfiguration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

An object representing a configuration of thumbnails for recorded video from an individual participant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#participant_thumbnail_configuration IvsStage#participant_thumbnail_configuration}

---

### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration: ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.recordingMode">recordingMode</a></code> | <code>string</code> | Thumbnail recording mode. Default: DISABLED. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.storage">storage</a></code> | <code>string[]</code> | Indicates the format in which thumbnails are recorded. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.targetIntervalSeconds">targetIntervalSeconds</a></code> | <code>number</code> | The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60. |

---

##### `recordingMode`<sup>Optional</sup> <a name="recordingMode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.recordingMode"></a>

```typescript
public readonly recordingMode: string;
```

- *Type:* string

Thumbnail recording mode. Default: DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#recording_mode IvsStage#recording_mode}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.storage"></a>

```typescript
public readonly storage: string[];
```

- *Type:* string[]

Indicates the format in which thumbnails are recorded.

SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#storage IvsStage#storage}

---

##### `targetIntervalSeconds`<sup>Optional</sup> <a name="targetIntervalSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.property.targetIntervalSeconds"></a>

```typescript
public readonly targetIntervalSeconds: number;
```

- *Type:* number

The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#target_interval_seconds IvsStage#target_interval_seconds}

---

### IvsStageConfig <a name="IvsStageConfig" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageConfig: ivsStage.IvsStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.autoParticipantRecordingConfiguration">autoParticipantRecordingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | Configuration object for individual participant recording, to attach to the new stage. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.name">name</a></code> | <code>string</code> | Stage name. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoParticipantRecordingConfiguration`<sup>Optional</sup> <a name="autoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.autoParticipantRecordingConfiguration"></a>

```typescript
public readonly autoParticipantRecordingConfiguration: IvsStageAutoParticipantRecordingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

Configuration object for individual participant recording, to attach to the new stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#auto_participant_recording_configuration IvsStage#auto_participant_recording_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#name IvsStage#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsStage.IvsStageConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IvsStageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#tags IvsStage#tags}

---

### IvsStageTags <a name="IvsStageTags" id="@cdktn/provider-awscc.ivsStage.IvsStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

const ivsStageTags: ivsStage.IvsStageTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#key IvsStage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_stage#value IvsStage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration">putParticipantRecordingHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resetParticipantRecordingHlsConfiguration">resetParticipantRecordingHlsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParticipantRecordingHlsConfiguration` <a name="putParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration"></a>

```typescript
public putParticipantRecordingHlsConfiguration(value: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.putParticipantRecordingHlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---

##### `resetParticipantRecordingHlsConfiguration` <a name="resetParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resetParticipantRecordingHlsConfiguration"></a>

```typescript
public resetParticipantRecordingHlsConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration">participantRecordingHlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfigurationInput">participantRecordingHlsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `participantRecordingHlsConfiguration`<sup>Required</sup> <a name="participantRecordingHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration"></a>

```typescript
public readonly participantRecordingHlsConfiguration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a>

---

##### `participantRecordingHlsConfigurationInput`<sup>Optional</sup> <a name="participantRecordingHlsConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfigurationInput"></a>

```typescript
public readonly participantRecordingHlsConfigurationInput: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resetTargetSegmentDurationSeconds">resetTargetSegmentDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetSegmentDurationSeconds` <a name="resetTargetSegmentDurationSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resetTargetSegmentDurationSeconds"></a>

```typescript
public resetTargetSegmentDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSecondsInput">targetSegmentDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds">targetSegmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetSegmentDurationSecondsInput`<sup>Optional</sup> <a name="targetSegmentDurationSecondsInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSecondsInput"></a>

```typescript
public readonly targetSegmentDurationSecondsInput: number;
```

- *Type:* number

---

##### `targetSegmentDurationSeconds`<sup>Required</sup> <a name="targetSegmentDurationSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds"></a>

```typescript
public readonly targetSegmentDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration">putHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration">putThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetHlsConfiguration">resetHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetMediaTypes">resetMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetRecordingReconnectWindowSeconds">resetRecordingReconnectWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetStorageConfigurationArn">resetStorageConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetThumbnailConfiguration">resetThumbnailConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHlsConfiguration` <a name="putHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration"></a>

```typescript
public putHlsConfiguration(value: IvsStageAutoParticipantRecordingConfigurationHlsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putHlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---

##### `putThumbnailConfiguration` <a name="putThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration"></a>

```typescript
public putThumbnailConfiguration(value: IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.putThumbnailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---

##### `resetHlsConfiguration` <a name="resetHlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetHlsConfiguration"></a>

```typescript
public resetHlsConfiguration(): void
```

##### `resetMediaTypes` <a name="resetMediaTypes" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetMediaTypes"></a>

```typescript
public resetMediaTypes(): void
```

##### `resetRecordingReconnectWindowSeconds` <a name="resetRecordingReconnectWindowSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetRecordingReconnectWindowSeconds"></a>

```typescript
public resetRecordingReconnectWindowSeconds(): void
```

##### `resetStorageConfigurationArn` <a name="resetStorageConfigurationArn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetStorageConfigurationArn"></a>

```typescript
public resetStorageConfigurationArn(): void
```

##### `resetThumbnailConfiguration` <a name="resetThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.resetThumbnailConfiguration"></a>

```typescript
public resetThumbnailConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration">hlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration">thumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfigurationInput">hlsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypesInput">mediaTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSecondsInput">recordingReconnectWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArnInput">storageConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfigurationInput">thumbnailConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes">mediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds">recordingReconnectWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn">storageConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hlsConfiguration`<sup>Required</sup> <a name="hlsConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration"></a>

```typescript
public readonly hlsConfiguration: IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a>

---

##### `thumbnailConfiguration`<sup>Required</sup> <a name="thumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration"></a>

```typescript
public readonly thumbnailConfiguration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `hlsConfigurationInput`<sup>Optional</sup> <a name="hlsConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfigurationInput"></a>

```typescript
public readonly hlsConfigurationInput: IResolvable | IvsStageAutoParticipantRecordingConfigurationHlsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationHlsConfiguration">IvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---

##### `mediaTypesInput`<sup>Optional</sup> <a name="mediaTypesInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypesInput"></a>

```typescript
public readonly mediaTypesInput: string[];
```

- *Type:* string[]

---

##### `recordingReconnectWindowSecondsInput`<sup>Optional</sup> <a name="recordingReconnectWindowSecondsInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSecondsInput"></a>

```typescript
public readonly recordingReconnectWindowSecondsInput: number;
```

- *Type:* number

---

##### `storageConfigurationArnInput`<sup>Optional</sup> <a name="storageConfigurationArnInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArnInput"></a>

```typescript
public readonly storageConfigurationArnInput: string;
```

- *Type:* string

---

##### `thumbnailConfigurationInput`<sup>Optional</sup> <a name="thumbnailConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfigurationInput"></a>

```typescript
public readonly thumbnailConfigurationInput: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---

##### `mediaTypes`<sup>Required</sup> <a name="mediaTypes" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes"></a>

```typescript
public readonly mediaTypes: string[];
```

- *Type:* string[]

---

##### `recordingReconnectWindowSeconds`<sup>Required</sup> <a name="recordingReconnectWindowSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds"></a>

```typescript
public readonly recordingReconnectWindowSeconds: number;
```

- *Type:* number

---

##### `storageConfigurationArn`<sup>Required</sup> <a name="storageConfigurationArn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn"></a>

```typescript
public readonly storageConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageAutoParticipantRecordingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfiguration">IvsStageAutoParticipantRecordingConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration">putParticipantThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resetParticipantThumbnailConfiguration">resetParticipantThumbnailConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParticipantThumbnailConfiguration` <a name="putParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration"></a>

```typescript
public putParticipantThumbnailConfiguration(value: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.putParticipantThumbnailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---

##### `resetParticipantThumbnailConfiguration` <a name="resetParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resetParticipantThumbnailConfiguration"></a>

```typescript
public resetParticipantThumbnailConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration">participantThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfigurationInput">participantThumbnailConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `participantThumbnailConfiguration`<sup>Required</sup> <a name="participantThumbnailConfiguration" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration"></a>

```typescript
public readonly participantThumbnailConfiguration: IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a>

---

##### `participantThumbnailConfigurationInput`<sup>Optional</sup> <a name="participantThumbnailConfigurationInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfigurationInput"></a>

```typescript
public readonly participantThumbnailConfigurationInput: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---


### IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference <a name="IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetRecordingMode">resetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetTargetIntervalSeconds">resetTargetIntervalSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecordingMode` <a name="resetRecordingMode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetRecordingMode"></a>

```typescript
public resetRecordingMode(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTargetIntervalSeconds` <a name="resetTargetIntervalSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resetTargetIntervalSeconds"></a>

```typescript
public resetTargetIntervalSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingModeInput">recordingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storageInput">storageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput">targetIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode">recordingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage">storage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds">targetIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordingModeInput`<sup>Optional</sup> <a name="recordingModeInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingModeInput"></a>

```typescript
public readonly recordingModeInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: string[];
```

- *Type:* string[]

---

##### `targetIntervalSecondsInput`<sup>Optional</sup> <a name="targetIntervalSecondsInput" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput"></a>

```typescript
public readonly targetIntervalSecondsInput: number;
```

- *Type:* number

---

##### `recordingMode`<sup>Required</sup> <a name="recordingMode" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode"></a>

```typescript
public readonly recordingMode: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage"></a>

```typescript
public readonly storage: string[];
```

- *Type:* string[]

---

##### `targetIntervalSeconds`<sup>Required</sup> <a name="targetIntervalSeconds" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```typescript
public readonly targetIntervalSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">IvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---


### IvsStageTagsList <a name="IvsStageTagsList" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get"></a>

```typescript
public get(index: number): IvsStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>[]

---


### IvsStageTagsOutputReference <a name="IvsStageTagsOutputReference" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer"></a>

```typescript
import { ivsStage } from '@cdktn/provider-awscc'

new ivsStage.IvsStageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsStage.IvsStageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsStageTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsStage.IvsStageTags">IvsStageTags</a>

---



