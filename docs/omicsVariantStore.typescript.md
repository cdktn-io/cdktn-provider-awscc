# `omicsVariantStore` Submodule <a name="`omicsVariantStore` Submodule" id="@cdktn/provider-awscc.omicsVariantStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsVariantStore <a name="OmicsVariantStore" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store awscc_omics_variant_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

new omicsVariantStore.OmicsVariantStore(scope: Construct, id: string, config: OmicsVariantStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig">OmicsVariantStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig">OmicsVariantStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putReference">putReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig">putSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetSseConfig">resetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReference` <a name="putReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putReference"></a>

```typescript
public putReference(value: OmicsVariantStoreReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

---

##### `putSseConfig` <a name="putSseConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig"></a>

```typescript
public putSseConfig(value: OmicsVariantStoreSseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSseConfig` <a name="resetSseConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetSseConfig"></a>

```typescript
public resetSseConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsVariantStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isConstruct"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

omicsVariantStore.OmicsVariantStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformElement"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

omicsVariantStore.OmicsVariantStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformResource"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

omicsVariantStore.OmicsVariantStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

omicsVariantStore.OmicsVariantStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OmicsVariantStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsVariantStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsVariantStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsVariantStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference">OmicsVariantStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference">OmicsVariantStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeArn">storeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeSizeBytes">storeSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.variantStoreId">variantStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.referenceInput">referenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfigInput">sseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.reference"></a>

```typescript
public readonly reference: OmicsVariantStoreReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference">OmicsVariantStoreReferenceOutputReference</a>

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsVariantStoreSseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference">OmicsVariantStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `storeArn`<sup>Required</sup> <a name="storeArn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeArn"></a>

```typescript
public readonly storeArn: string;
```

- *Type:* string

---

##### `storeSizeBytes`<sup>Required</sup> <a name="storeSizeBytes" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.storeSizeBytes"></a>

```typescript
public readonly storeSizeBytes: number;
```

- *Type:* number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `variantStoreId`<sup>Required</sup> <a name="variantStoreId" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.variantStoreId"></a>

```typescript
public readonly variantStoreId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.referenceInput"></a>

```typescript
public readonly referenceInput: IResolvable | OmicsVariantStoreReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

---

##### `sseConfigInput`<sup>Optional</sup> <a name="sseConfigInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.sseConfigInput"></a>

```typescript
public readonly sseConfigInput: IResolvable | OmicsVariantStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsVariantStoreConfig <a name="OmicsVariantStoreConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.Initializer"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

const omicsVariantStoreConfig: omicsVariantStore.OmicsVariantStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#name OmicsVariantStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference OmicsVariantStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#description OmicsVariantStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#sse_config OmicsVariantStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#tags OmicsVariantStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#name OmicsVariantStore#name}.

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.reference"></a>

```typescript
public readonly reference: OmicsVariantStoreReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference OmicsVariantStore#reference}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#description OmicsVariantStore#description}.

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsVariantStoreSseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#sse_config OmicsVariantStore#sse_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#tags OmicsVariantStore#tags}.

---

### OmicsVariantStoreReference <a name="OmicsVariantStoreReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference.Initializer"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

const omicsVariantStoreReference: omicsVariantStore.OmicsVariantStoreReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference.property.referenceArn">referenceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference_arn OmicsVariantStore#reference_arn}. |

---

##### `referenceArn`<sup>Required</sup> <a name="referenceArn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference.property.referenceArn"></a>

```typescript
public readonly referenceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#reference_arn OmicsVariantStore#reference_arn}.

---

### OmicsVariantStoreSseConfig <a name="OmicsVariantStoreSseConfig" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.Initializer"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

const omicsVariantStoreSseConfig: omicsVariantStore.OmicsVariantStoreSseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#key_arn OmicsVariantStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#type OmicsVariantStore#type}. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#key_arn OmicsVariantStore#key_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_variant_store#type OmicsVariantStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsVariantStoreReferenceOutputReference <a name="OmicsVariantStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

new omicsVariantStore.OmicsVariantStoreReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArnInput">referenceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArn">referenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceArnInput`<sup>Optional</sup> <a name="referenceArnInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArnInput"></a>

```typescript
public readonly referenceArnInput: string;
```

- *Type:* string

---

##### `referenceArn`<sup>Required</sup> <a name="referenceArn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.referenceArn"></a>

```typescript
public readonly referenceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsVariantStoreReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreReference">OmicsVariantStoreReference</a>

---


### OmicsVariantStoreSseConfigOutputReference <a name="OmicsVariantStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer"></a>

```typescript
import { omicsVariantStore } from '@cdktn/provider-awscc'

new omicsVariantStore.OmicsVariantStoreSseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetKeyArn"></a>

```typescript
public resetKeyArn(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsVariantStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsVariantStore.OmicsVariantStoreSseConfig">OmicsVariantStoreSseConfig</a>

---



