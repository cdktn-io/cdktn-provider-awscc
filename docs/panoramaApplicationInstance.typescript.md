# `panoramaApplicationInstance` Submodule <a name="`panoramaApplicationInstance` Submodule" id="@cdktn/provider-awscc.panoramaApplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaApplicationInstance <a name="PanoramaApplicationInstance" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance awscc_panorama_application_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

new panoramaApplicationInstance.PanoramaApplicationInstance(scope: Construct, id: string, config: PanoramaApplicationInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig">PanoramaApplicationInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig">PanoramaApplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload">putManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload">putManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace">resetApplicationInstanceIdToReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload">resetManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn">resetRuntimeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManifestOverridesPayload` <a name="putManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload"></a>

```typescript
public putManifestOverridesPayload(value: PanoramaApplicationInstanceManifestOverridesPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `putManifestPayload` <a name="putManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload"></a>

```typescript
public putManifestPayload(value: PanoramaApplicationInstanceManifestPayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags"></a>

```typescript
public putTags(value: IResolvable | PanoramaApplicationInstanceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

---

##### `resetApplicationInstanceIdToReplace` <a name="resetApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace"></a>

```typescript
public resetApplicationInstanceIdToReplace(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetManifestOverridesPayload` <a name="resetManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload"></a>

```typescript
public resetManifestOverridesPayload(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRuntimeRoleArn` <a name="resetRuntimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn"></a>

```typescript
public resetRuntimeRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PanoramaApplicationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PanoramaApplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaApplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId">applicationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime">createdTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName">defaultRuntimeContextDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus">healthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload">manifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload">manifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription">statusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput">applicationInstanceIdToReplaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput">defaultRuntimeContextDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput">manifestOverridesPayloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput">manifestPayloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput">runtimeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace">applicationInstanceIdToReplace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice">defaultRuntimeContextDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn">runtimeRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationInstanceId`<sup>Required</sup> <a name="applicationInstanceId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId"></a>

```typescript
public readonly applicationInstanceId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime"></a>

```typescript
public readonly createdTime: number;
```

- *Type:* number

---

##### `defaultRuntimeContextDeviceName`<sup>Required</sup> <a name="defaultRuntimeContextDeviceName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName"></a>

```typescript
public readonly defaultRuntimeContextDeviceName: string;
```

- *Type:* string

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus"></a>

```typescript
public readonly healthStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: number;
```

- *Type:* number

---

##### `manifestOverridesPayload`<sup>Required</sup> <a name="manifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload"></a>

```typescript
public readonly manifestOverridesPayload: PanoramaApplicationInstanceManifestOverridesPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a>

---

##### `manifestPayload`<sup>Required</sup> <a name="manifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload"></a>

```typescript
public readonly manifestPayload: PanoramaApplicationInstanceManifestPayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDescription`<sup>Required</sup> <a name="statusDescription" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription"></a>

```typescript
public readonly statusDescription: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags"></a>

```typescript
public readonly tags: PanoramaApplicationInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a>

---

##### `applicationInstanceIdToReplaceInput`<sup>Optional</sup> <a name="applicationInstanceIdToReplaceInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput"></a>

```typescript
public readonly applicationInstanceIdToReplaceInput: string;
```

- *Type:* string

---

##### `defaultRuntimeContextDeviceInput`<sup>Optional</sup> <a name="defaultRuntimeContextDeviceInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput"></a>

```typescript
public readonly defaultRuntimeContextDeviceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `manifestOverridesPayloadInput`<sup>Optional</sup> <a name="manifestOverridesPayloadInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput"></a>

```typescript
public readonly manifestOverridesPayloadInput: IResolvable | PanoramaApplicationInstanceManifestOverridesPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `manifestPayloadInput`<sup>Optional</sup> <a name="manifestPayloadInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput"></a>

```typescript
public readonly manifestPayloadInput: IResolvable | PanoramaApplicationInstanceManifestPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeRoleArnInput`<sup>Optional</sup> <a name="runtimeRoleArnInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput"></a>

```typescript
public readonly runtimeRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | PanoramaApplicationInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

---

##### `applicationInstanceIdToReplace`<sup>Required</sup> <a name="applicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace"></a>

```typescript
public readonly applicationInstanceIdToReplace: string;
```

- *Type:* string

---

##### `defaultRuntimeContextDevice`<sup>Required</sup> <a name="defaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice"></a>

```typescript
public readonly defaultRuntimeContextDevice: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeRoleArn`<sup>Required</sup> <a name="runtimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn"></a>

```typescript
public readonly runtimeRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaApplicationInstanceConfig <a name="PanoramaApplicationInstanceConfig" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

const panoramaApplicationInstanceConfig: panoramaApplicationInstance.PanoramaApplicationInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice">defaultRuntimeContextDevice</a></code> | <code>string</code> | The device's ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload">manifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | The application's manifest document. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace">applicationInstanceIdToReplace</a></code> | <code>string</code> | The ID of an application instance to replace with the new instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description">description</a></code> | <code>string</code> | A description for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload">manifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | Setting overrides for the application manifest. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name">name</a></code> | <code>string</code> | A name for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn">runtimeRoleArn</a></code> | <code>string</code> | The ARN of a runtime role for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]</code> | Tags for the application instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultRuntimeContextDevice`<sup>Required</sup> <a name="defaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice"></a>

```typescript
public readonly defaultRuntimeContextDevice: string;
```

- *Type:* string

The device's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#default_runtime_context_device PanoramaApplicationInstance#default_runtime_context_device}

---

##### `manifestPayload`<sup>Required</sup> <a name="manifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload"></a>

```typescript
public readonly manifestPayload: PanoramaApplicationInstanceManifestPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

The application's manifest document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#manifest_payload PanoramaApplicationInstance#manifest_payload}

---

##### `applicationInstanceIdToReplace`<sup>Optional</sup> <a name="applicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace"></a>

```typescript
public readonly applicationInstanceIdToReplace: string;
```

- *Type:* string

The ID of an application instance to replace with the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#application_instance_id_to_replace PanoramaApplicationInstance#application_instance_id_to_replace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#description PanoramaApplicationInstance#description}

---

##### `manifestOverridesPayload`<sup>Optional</sup> <a name="manifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload"></a>

```typescript
public readonly manifestOverridesPayload: PanoramaApplicationInstanceManifestOverridesPayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

Setting overrides for the application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#manifest_overrides_payload PanoramaApplicationInstance#manifest_overrides_payload}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#name PanoramaApplicationInstance#name}

---

##### `runtimeRoleArn`<sup>Optional</sup> <a name="runtimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn"></a>

```typescript
public readonly runtimeRoleArn: string;
```

- *Type:* string

The ARN of a runtime role for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#runtime_role_arn PanoramaApplicationInstance#runtime_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | PanoramaApplicationInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

Tags for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#tags PanoramaApplicationInstance#tags}

---

### PanoramaApplicationInstanceManifestOverridesPayload <a name="PanoramaApplicationInstanceManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

const panoramaApplicationInstanceManifestOverridesPayload: panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData">payloadData</a></code> | <code>string</code> | The overrides document. |

---

##### `payloadData`<sup>Optional</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData"></a>

```typescript
public readonly payloadData: string;
```

- *Type:* string

The overrides document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceManifestPayload <a name="PanoramaApplicationInstanceManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

const panoramaApplicationInstanceManifestPayload: panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData">payloadData</a></code> | <code>string</code> | The application manifest. |

---

##### `payloadData`<sup>Optional</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData"></a>

```typescript
public readonly payloadData: string;
```

- *Type:* string

The application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceTags <a name="PanoramaApplicationInstanceTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

const panoramaApplicationInstanceTags: panoramaApplicationInstance.PanoramaApplicationInstanceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PanoramaApplicationInstanceManifestOverridesPayloadOutputReference <a name="PanoramaApplicationInstanceManifestOverridesPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

new panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData">resetPayloadData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPayloadData` <a name="resetPayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData"></a>

```typescript
public resetPayloadData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput">payloadDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData">payloadData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payloadDataInput`<sup>Optional</sup> <a name="payloadDataInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput"></a>

```typescript
public readonly payloadDataInput: string;
```

- *Type:* string

---

##### `payloadData`<sup>Required</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData"></a>

```typescript
public readonly payloadData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaApplicationInstanceManifestOverridesPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---


### PanoramaApplicationInstanceManifestPayloadOutputReference <a name="PanoramaApplicationInstanceManifestPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

new panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData">resetPayloadData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPayloadData` <a name="resetPayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData"></a>

```typescript
public resetPayloadData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput">payloadDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData">payloadData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `payloadDataInput`<sup>Optional</sup> <a name="payloadDataInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput"></a>

```typescript
public readonly payloadDataInput: string;
```

- *Type:* string

---

##### `payloadData`<sup>Required</sup> <a name="payloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData"></a>

```typescript
public readonly payloadData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaApplicationInstanceManifestPayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---


### PanoramaApplicationInstanceTagsList <a name="PanoramaApplicationInstanceTagsList" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

new panoramaApplicationInstance.PanoramaApplicationInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get"></a>

```typescript
public get(index: number): PanoramaApplicationInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaApplicationInstanceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

---


### PanoramaApplicationInstanceTagsOutputReference <a name="PanoramaApplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer"></a>

```typescript
import { panoramaApplicationInstance } from '@cdktn/provider-awscc'

new panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PanoramaApplicationInstanceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>

---



