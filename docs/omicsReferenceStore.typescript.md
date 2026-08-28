# `omicsReferenceStore` Submodule <a name="`omicsReferenceStore` Submodule" id="@cdktn/provider-awscc.omicsReferenceStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsReferenceStore <a name="OmicsReferenceStore" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store awscc_omics_reference_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

new omicsReferenceStore.OmicsReferenceStore(scope: Construct, id: string, config: OmicsReferenceStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig">OmicsReferenceStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig">OmicsReferenceStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.putSseConfig">putSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetSseConfig">resetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseConfig` <a name="putSseConfig" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.putSseConfig"></a>

```typescript
public putSseConfig(value: OmicsReferenceStoreSseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSseConfig` <a name="resetSseConfig" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetSseConfig"></a>

```typescript
public resetSseConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsReferenceStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isConstruct"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

omicsReferenceStore.OmicsReferenceStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isTerraformElement"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

omicsReferenceStore.OmicsReferenceStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isTerraformResource"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

omicsReferenceStore.OmicsReferenceStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.generateConfigForImport"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

omicsReferenceStore.OmicsReferenceStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OmicsReferenceStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsReferenceStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsReferenceStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsReferenceStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.referenceStoreId">referenceStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference">OmicsReferenceStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.sseConfigInput">sseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `referenceStoreId`<sup>Required</sup> <a name="referenceStoreId" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.referenceStoreId"></a>

```typescript
public readonly referenceStoreId: string;
```

- *Type:* string

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsReferenceStoreSseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference">OmicsReferenceStoreSseConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sseConfigInput`<sup>Optional</sup> <a name="sseConfigInput" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.sseConfigInput"></a>

```typescript
public readonly sseConfigInput: IResolvable | OmicsReferenceStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsReferenceStoreConfig <a name="OmicsReferenceStoreConfig" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.Initializer"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

const omicsReferenceStoreConfig: omicsReferenceStore.OmicsReferenceStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.name">name</a></code> | <code>string</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.description">description</a></code> | <code>string</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#tags OmicsReferenceStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#name OmicsReferenceStore#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#description OmicsReferenceStore#description}

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsReferenceStoreSseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#sse_config OmicsReferenceStore#sse_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#tags OmicsReferenceStore#tags}.

---

### OmicsReferenceStoreSseConfig <a name="OmicsReferenceStoreSseConfig" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig.Initializer"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

const omicsReferenceStoreSseConfig: omicsReferenceStore.OmicsReferenceStoreSseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig.property.keyArn">keyArn</a></code> | <code>string</code> | An encryption key ARN. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#type OmicsReferenceStore#type}. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#key_arn OmicsReferenceStore#key_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_reference_store#type OmicsReferenceStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsReferenceStoreSseConfigOutputReference <a name="OmicsReferenceStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.Initializer"></a>

```typescript
import { omicsReferenceStore } from '@cdktn/provider-awscc'

new omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resetKeyArn"></a>

```typescript
public resetKeyArn(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsReferenceStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsReferenceStore.OmicsReferenceStoreSseConfig">OmicsReferenceStoreSseConfig</a>

---



