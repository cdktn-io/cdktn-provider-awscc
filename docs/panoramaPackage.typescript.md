# `panoramaPackage` Submodule <a name="`panoramaPackage` Submodule" id="@cdktn/provider-awscc.panoramaPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaPackage <a name="PanoramaPackage" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package awscc_panorama_package}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

new panoramaPackage.PanoramaPackage(scope: Construct, id: string, config: PanoramaPackageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig">PanoramaPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig">PanoramaPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.putStorageLocation">putStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageLocation` <a name="putStorageLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.putStorageLocation"></a>

```typescript
public putStorageLocation(value: PanoramaPackageStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.putTags"></a>

```typescript
public putTags(value: IResolvable | PanoramaPackageTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]

---

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaPackage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isConstruct"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

panoramaPackage.PanoramaPackage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isTerraformElement"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

panoramaPackage.PanoramaPackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isTerraformResource"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

panoramaPackage.PanoramaPackage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.generateConfigForImport"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

panoramaPackage.PanoramaPackage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PanoramaPackage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PanoramaPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PanoramaPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.createdTime">createdTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.packageId">packageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference">PanoramaPackageStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList">PanoramaPackageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.storageLocationInput">storageLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.createdTime"></a>

```typescript
public readonly createdTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.storageLocation"></a>

```typescript
public readonly storageLocation: PanoramaPackageStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference">PanoramaPackageStorageLocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.tags"></a>

```typescript
public readonly tags: PanoramaPackageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList">PanoramaPackageTagsList</a>

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: IResolvable | PanoramaPackageStorageLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | PanoramaPackageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaPackageConfig <a name="PanoramaPackageConfig" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

const panoramaPackageConfig: panoramaPackage.PanoramaPackageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.packageName">packageName</a></code> | <code>string</code> | A name for the package. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.storageLocation">storageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a></code> | A storage location. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]</code> | Tags for the package. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

A name for the package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#package_name PanoramaPackage#package_name}

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: PanoramaPackageStorageLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a>

A storage location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#storage_location PanoramaPackage#storage_location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | PanoramaPackageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]

Tags for the package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#tags PanoramaPackage#tags}

---

### PanoramaPackageStorageLocation <a name="PanoramaPackageStorageLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

const panoramaPackageStorageLocation: panoramaPackage.PanoramaPackageStorageLocation = { ... }
```


### PanoramaPackageTags <a name="PanoramaPackageTags" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

const panoramaPackageTags: panoramaPackage.PanoramaPackageTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#key PanoramaPackage#key}. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#value PanoramaPackage#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#key PanoramaPackage#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package#value PanoramaPackage#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PanoramaPackageStorageLocationOutputReference <a name="PanoramaPackageStorageLocationOutputReference" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

new panoramaPackage.PanoramaPackageStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.binaryPrefixLocation">binaryPrefixLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.generatedPrefixLocation">generatedPrefixLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.manifestPrefixLocation">manifestPrefixLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.repoPrefixLocation">repoPrefixLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryPrefixLocation`<sup>Required</sup> <a name="binaryPrefixLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.binaryPrefixLocation"></a>

```typescript
public readonly binaryPrefixLocation: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `generatedPrefixLocation`<sup>Required</sup> <a name="generatedPrefixLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.generatedPrefixLocation"></a>

```typescript
public readonly generatedPrefixLocation: string;
```

- *Type:* string

---

##### `manifestPrefixLocation`<sup>Required</sup> <a name="manifestPrefixLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.manifestPrefixLocation"></a>

```typescript
public readonly manifestPrefixLocation: string;
```

- *Type:* string

---

##### `repoPrefixLocation`<sup>Required</sup> <a name="repoPrefixLocation" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.repoPrefixLocation"></a>

```typescript
public readonly repoPrefixLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaPackageStorageLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageStorageLocation">PanoramaPackageStorageLocation</a>

---


### PanoramaPackageTagsList <a name="PanoramaPackageTagsList" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

new panoramaPackage.PanoramaPackageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.get"></a>

```typescript
public get(index: number): PanoramaPackageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaPackageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>[]

---


### PanoramaPackageTagsOutputReference <a name="PanoramaPackageTagsOutputReference" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer"></a>

```typescript
import { panoramaPackage } from '@cdktn/provider-awscc'

new panoramaPackage.PanoramaPackageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaPackageTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaPackage.PanoramaPackageTags">PanoramaPackageTags</a>

---



