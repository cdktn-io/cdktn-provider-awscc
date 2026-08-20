# `panoramaPackageVersion` Submodule <a name="`panoramaPackageVersion` Submodule" id="@cdktn/provider-awscc.panoramaPackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaPackageVersion <a name="PanoramaPackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version awscc_panorama_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer"></a>

```typescript
import { panoramaPackageVersion } from '@cdktn/provider-awscc'

new panoramaPackageVersion.PanoramaPackageVersion(scope: Construct, id: string, config: PanoramaPackageVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig">PanoramaPackageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig">PanoramaPackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest">resetMarkLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount">resetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion">resetUpdatedLatestPatchVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetMarkLatest` <a name="resetMarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest"></a>

```typescript
public resetMarkLatest(): void
```

##### `resetOwnerAccount` <a name="resetOwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount"></a>

```typescript
public resetOwnerAccount(): void
```

##### `resetUpdatedLatestPatchVersion` <a name="resetUpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion"></a>

```typescript
public resetUpdatedLatestPatchVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct"></a>

```typescript
import { panoramaPackageVersion } from '@cdktn/provider-awscc'

panoramaPackageVersion.PanoramaPackageVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement"></a>

```typescript
import { panoramaPackageVersion } from '@cdktn/provider-awscc'

panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource"></a>

```typescript
import { panoramaPackageVersion } from '@cdktn/provider-awscc'

panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport"></a>

```typescript
import { panoramaPackageVersion } from '@cdktn/provider-awscc'

panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PanoramaPackageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PanoramaPackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaPackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch">isLatestPatch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn">packageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime">registeredTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription">statusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput">markLatestInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput">ownerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput">packageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput">patchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput">updatedLatestPatchVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest">markLatest</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId">packageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion">patchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion">updatedLatestPatchVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLatestPatch`<sup>Required</sup> <a name="isLatestPatch" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch"></a>

```typescript
public readonly isLatestPatch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `packageArn`<sup>Required</sup> <a name="packageArn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn"></a>

```typescript
public readonly packageArn: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `registeredTime`<sup>Required</sup> <a name="registeredTime" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime"></a>

```typescript
public readonly registeredTime: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDescription`<sup>Required</sup> <a name="statusDescription" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription"></a>

```typescript
public readonly statusDescription: string;
```

- *Type:* string

---

##### `markLatestInput`<sup>Optional</sup> <a name="markLatestInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput"></a>

```typescript
public readonly markLatestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ownerAccountInput`<sup>Optional</sup> <a name="ownerAccountInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput"></a>

```typescript
public readonly ownerAccountInput: string;
```

- *Type:* string

---

##### `packageIdInput`<sup>Optional</sup> <a name="packageIdInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput"></a>

```typescript
public readonly packageIdInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `patchVersionInput`<sup>Optional</sup> <a name="patchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput"></a>

```typescript
public readonly patchVersionInput: string;
```

- *Type:* string

---

##### `updatedLatestPatchVersionInput`<sup>Optional</sup> <a name="updatedLatestPatchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput"></a>

```typescript
public readonly updatedLatestPatchVersionInput: string;
```

- *Type:* string

---

##### `markLatest`<sup>Required</sup> <a name="markLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest"></a>

```typescript
public readonly markLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

##### `patchVersion`<sup>Required</sup> <a name="patchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion"></a>

```typescript
public readonly patchVersion: string;
```

- *Type:* string

---

##### `updatedLatestPatchVersion`<sup>Required</sup> <a name="updatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion"></a>

```typescript
public readonly updatedLatestPatchVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaPackageVersionConfig <a name="PanoramaPackageVersionConfig" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.Initializer"></a>

```typescript
import { panoramaPackageVersion } from '@cdktn/provider-awscc'

const panoramaPackageVersionConfig: panoramaPackageVersion.PanoramaPackageVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId">packageId</a></code> | <code>string</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion">packageVersion</a></code> | <code>string</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion">patchVersion</a></code> | <code>string</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest">markLatest</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion">updatedLatestPatchVersion</a></code> | <code>string</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `patchVersion`<sup>Required</sup> <a name="patchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion"></a>

```typescript
public readonly patchVersion: string;
```

- *Type:* string

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `markLatest`<sup>Optional</sup> <a name="markLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest"></a>

```typescript
public readonly markLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `updatedLatestPatchVersion`<sup>Optional</sup> <a name="updatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion"></a>

```typescript
public readonly updatedLatestPatchVersion: string;
```

- *Type:* string

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---



