# `mgnReplicationConfigurationTemplate` Submodule <a name="`mgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnReplicationConfigurationTemplate <a name="MgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate(scope: Construct, id: string, config: MgnReplicationConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig">MgnReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig">MgnReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">resetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol">resetInternetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone">resetStoreSnapshotOnLocalZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint">resetUseFipsEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | MgnReplicationConfigurationTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]

---

##### `resetEbsEncryptionKeyArn` <a name="resetEbsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```typescript
public resetEbsEncryptionKeyArn(): void
```

##### `resetInternetProtocol` <a name="resetInternetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol"></a>

```typescript
public resetInternetProtocol(): void
```

##### `resetStoreSnapshotOnLocalZone` <a name="resetStoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone"></a>

```typescript
public resetStoreSnapshotOnLocalZone(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUseFipsEndpoint` <a name="resetUseFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint"></a>

```typescript
public resetUseFipsEndpoint(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MgnReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">associateDefaultSecurityGroupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput">bandwidthThrottlingInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput">createPublicIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput">dataPlaneRoutingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">defaultLargeStagingDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput">ebsEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">ebsEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput">internetProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">replicationServerInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">replicationServersSecurityGroupsIDsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">stagingAreaSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput">stagingAreaTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput">storeSnapshotOnLocalZoneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">useDedicatedReplicationServerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput">useFipsEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp">createPublicIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption">ebsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol">internetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags">stagingAreaTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">storeSnapshotOnLocalZone</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags"></a>

```typescript
public readonly tags: MgnReplicationConfigurationTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a>

---

##### `associateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="associateDefaultSecurityGroupInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```typescript
public readonly associateDefaultSecurityGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidthThrottlingInput`<sup>Optional</sup> <a name="bandwidthThrottlingInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```typescript
public readonly bandwidthThrottlingInput: number;
```

- *Type:* number

---

##### `createPublicIpInput`<sup>Optional</sup> <a name="createPublicIpInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```typescript
public readonly createPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataPlaneRoutingInput`<sup>Optional</sup> <a name="dataPlaneRoutingInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```typescript
public readonly dataPlaneRoutingInput: string;
```

- *Type:* string

---

##### `defaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="defaultLargeStagingDiskTypeInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```typescript
public readonly defaultLargeStagingDiskTypeInput: string;
```

- *Type:* string

---

##### `ebsEncryptionInput`<sup>Optional</sup> <a name="ebsEncryptionInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```typescript
public readonly ebsEncryptionInput: string;
```

- *Type:* string

---

##### `ebsEncryptionKeyArnInput`<sup>Optional</sup> <a name="ebsEncryptionKeyArnInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```typescript
public readonly ebsEncryptionKeyArnInput: string;
```

- *Type:* string

---

##### `internetProtocolInput`<sup>Optional</sup> <a name="internetProtocolInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```typescript
public readonly internetProtocolInput: string;
```

- *Type:* string

---

##### `replicationServerInstanceTypeInput`<sup>Optional</sup> <a name="replicationServerInstanceTypeInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```typescript
public readonly replicationServerInstanceTypeInput: string;
```

- *Type:* string

---

##### `replicationServersSecurityGroupsIDsInput`<sup>Optional</sup> <a name="replicationServersSecurityGroupsIDsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```typescript
public readonly replicationServersSecurityGroupsIDsInput: string[];
```

- *Type:* string[]

---

##### `stagingAreaSubnetIdInput`<sup>Optional</sup> <a name="stagingAreaSubnetIdInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```typescript
public readonly stagingAreaSubnetIdInput: string;
```

- *Type:* string

---

##### `stagingAreaTagsInput`<sup>Optional</sup> <a name="stagingAreaTagsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```typescript
public readonly stagingAreaTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storeSnapshotOnLocalZoneInput`<sup>Optional</sup> <a name="storeSnapshotOnLocalZoneInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput"></a>

```typescript
public readonly storeSnapshotOnLocalZoneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MgnReplicationConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]

---

##### `useDedicatedReplicationServerInput`<sup>Optional</sup> <a name="useDedicatedReplicationServerInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```typescript
public readonly useDedicatedReplicationServerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useFipsEndpointInput`<sup>Optional</sup> <a name="useFipsEndpointInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput"></a>

```typescript
public readonly useFipsEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```typescript
public readonly associateDefaultSecurityGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```typescript
public readonly bandwidthThrottling: number;
```

- *Type:* number

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```typescript
public readonly createPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```typescript
public readonly dataPlaneRouting: string;
```

- *Type:* string

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```typescript
public readonly defaultLargeStagingDiskType: string;
```

- *Type:* string

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```typescript
public readonly ebsEncryption: string;
```

- *Type:* string

---

##### `ebsEncryptionKeyArn`<sup>Required</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```typescript
public readonly ebsEncryptionKeyArn: string;
```

- *Type:* string

---

##### `internetProtocol`<sup>Required</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```typescript
public readonly internetProtocol: string;
```

- *Type:* string

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```typescript
public readonly replicationServerInstanceType: string;
```

- *Type:* string

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```typescript
public readonly replicationServersSecurityGroupsIDs: string[];
```

- *Type:* string[]

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```typescript
public readonly stagingAreaSubnetId: string;
```

- *Type:* string

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```typescript
public readonly stagingAreaTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storeSnapshotOnLocalZone`<sup>Required</sup> <a name="storeSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```typescript
public readonly storeSnapshotOnLocalZone: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```typescript
public readonly useDedicatedReplicationServer: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useFipsEndpoint`<sup>Required</sup> <a name="useFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```typescript
public readonly useFipsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MgnReplicationConfigurationTemplateConfig <a name="MgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.Initializer"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const mgnReplicationConfigurationTemplateConfig: mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>number</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp">createPublicIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>string</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>string</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption">ebsEncryption</a></code> | <code>string</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>string</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>string</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags">stagingAreaTags</a></code> | <code>{[ key: string ]: string}</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>string</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol">internetProtocol</a></code> | <code>string</code> | Which internet protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone">storeSnapshotOnLocalZone</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to store the Snapshot in the Local Zone of the replication staging area subnet. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```typescript
public readonly associateDefaultSecurityGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#associate_default_security_group MgnReplicationConfigurationTemplate#associate_default_security_group}

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```typescript
public readonly bandwidthThrottling: number;
```

- *Type:* number

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#bandwidth_throttling MgnReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```typescript
public readonly createPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#create_public_ip MgnReplicationConfigurationTemplate#create_public_ip}

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```typescript
public readonly dataPlaneRouting: string;
```

- *Type:* string

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#data_plane_routing MgnReplicationConfigurationTemplate#data_plane_routing}

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```typescript
public readonly defaultLargeStagingDiskType: string;
```

- *Type:* string

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#default_large_staging_disk_type MgnReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```typescript
public readonly ebsEncryption: string;
```

- *Type:* string

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption MgnReplicationConfigurationTemplate#ebs_encryption}

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```typescript
public readonly replicationServerInstanceType: string;
```

- *Type:* string

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_server_instance_type MgnReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```typescript
public readonly replicationServersSecurityGroupsIDs: string[];
```

- *Type:* string[]

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_servers_security_groups_i_ds MgnReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```typescript
public readonly stagingAreaSubnetId: string;
```

- *Type:* string

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_subnet_id MgnReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```typescript
public readonly stagingAreaTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_tags MgnReplicationConfigurationTemplate#staging_area_tags}

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```typescript
public readonly useDedicatedReplicationServer: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_dedicated_replication_server MgnReplicationConfigurationTemplate#use_dedicated_replication_server}

---

##### `ebsEncryptionKeyArn`<sup>Optional</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```typescript
public readonly ebsEncryptionKeyArn: string;
```

- *Type:* string

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption_key_arn MgnReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internetProtocol`<sup>Optional</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```typescript
public readonly internetProtocol: string;
```

- *Type:* string

Which internet protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#internet_protocol MgnReplicationConfigurationTemplate#internet_protocol}

---

##### `storeSnapshotOnLocalZone`<sup>Optional</sup> <a name="storeSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone"></a>

```typescript
public readonly storeSnapshotOnLocalZone: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to store the Snapshot in the Local Zone of the replication staging area subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#store_snapshot_on_local_zone MgnReplicationConfigurationTemplate#store_snapshot_on_local_zone}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MgnReplicationConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#tags MgnReplicationConfigurationTemplate#tags}

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint"></a>

```typescript
public readonly useFipsEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_fips_endpoint MgnReplicationConfigurationTemplate#use_fips_endpoint}

---

### MgnReplicationConfigurationTemplateTags <a name="MgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.Initializer"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const mgnReplicationConfigurationTemplateTags: mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#key MgnReplicationConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#value MgnReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnReplicationConfigurationTemplateTagsList <a name="MgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get"></a>

```typescript
public get(index: number): MgnReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnReplicationConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>[]

---


### MgnReplicationConfigurationTemplateTagsOutputReference <a name="MgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```typescript
import { mgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MgnReplicationConfigurationTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>

---



