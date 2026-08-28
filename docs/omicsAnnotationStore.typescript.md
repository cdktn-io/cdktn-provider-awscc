# `omicsAnnotationStore` Submodule <a name="`omicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.omicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsAnnotationStore <a name="OmicsAnnotationStore" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

new omicsAnnotationStore.OmicsAnnotationStore(scope: Construct, id: string, config: OmicsAnnotationStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig">OmicsAnnotationStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig">OmicsAnnotationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference">putReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig">putSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions">putStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig">resetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions">resetStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReference` <a name="putReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference"></a>

```typescript
public putReference(value: OmicsAnnotationStoreReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `putSseConfig` <a name="putSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig"></a>

```typescript
public putSseConfig(value: OmicsAnnotationStoreSseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `putStoreOptions` <a name="putStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions"></a>

```typescript
public putStoreOptions(value: OmicsAnnotationStoreStoreOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetReference` <a name="resetReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference"></a>

```typescript
public resetReference(): void
```

##### `resetSseConfig` <a name="resetSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig"></a>

```typescript
public resetSseConfig(): void
```

##### `resetStoreOptions` <a name="resetStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions"></a>

```typescript
public resetStoreOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

omicsAnnotationStore.OmicsAnnotationStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsAnnotationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId">annotationStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn">storeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes">storeSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput">referenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput">sseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput">storeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput">storeOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat">storeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `annotationStoreId`<sup>Required</sup> <a name="annotationStoreId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId"></a>

```typescript
public readonly annotationStoreId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference"></a>

```typescript
public readonly reference: OmicsAnnotationStoreReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a>

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsAnnotationStoreSseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `storeArn`<sup>Required</sup> <a name="storeArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn"></a>

```typescript
public readonly storeArn: string;
```

- *Type:* string

---

##### `storeOptions`<sup>Required</sup> <a name="storeOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions"></a>

```typescript
public readonly storeOptions: OmicsAnnotationStoreStoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `storeSizeBytes`<sup>Required</sup> <a name="storeSizeBytes" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes"></a>

```typescript
public readonly storeSizeBytes: number;
```

- *Type:* number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput"></a>

```typescript
public readonly referenceInput: IResolvable | OmicsAnnotationStoreReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `sseConfigInput`<sup>Optional</sup> <a name="sseConfigInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput"></a>

```typescript
public readonly sseConfigInput: IResolvable | OmicsAnnotationStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `storeFormatInput`<sup>Optional</sup> <a name="storeFormatInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput"></a>

```typescript
public readonly storeFormatInput: string;
```

- *Type:* string

---

##### `storeOptionsInput`<sup>Optional</sup> <a name="storeOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput"></a>

```typescript
public readonly storeOptionsInput: IResolvable | OmicsAnnotationStoreStoreOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storeFormat`<sup>Required</sup> <a name="storeFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat"></a>

```typescript
public readonly storeFormat: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsAnnotationStoreConfig <a name="OmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

const omicsAnnotationStoreConfig: omicsAnnotationStore.OmicsAnnotationStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat">storeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `storeFormat`<sup>Required</sup> <a name="storeFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat"></a>

```typescript
public readonly storeFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference"></a>

```typescript
public readonly reference: OmicsAnnotationStoreReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsAnnotationStoreSseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `storeOptions`<sup>Optional</sup> <a name="storeOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions"></a>

```typescript
public readonly storeOptions: OmicsAnnotationStoreStoreOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

### OmicsAnnotationStoreReference <a name="OmicsAnnotationStoreReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

const omicsAnnotationStoreReference: omicsAnnotationStore.OmicsAnnotationStoreReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn">referenceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}. |

---

##### `referenceArn`<sup>Optional</sup> <a name="referenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn"></a>

```typescript
public readonly referenceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}.

---

### OmicsAnnotationStoreSseConfig <a name="OmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

const omicsAnnotationStoreSseConfig: omicsAnnotationStore.OmicsAnnotationStoreSseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}.

---

### OmicsAnnotationStoreStoreOptions <a name="OmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

const omicsAnnotationStoreStoreOptions: omicsAnnotationStore.OmicsAnnotationStoreStoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions">tsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}. |

---

##### `tsvStoreOptions`<sup>Optional</sup> <a name="tsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions"></a>

```typescript
public readonly tsvStoreOptions: OmicsAnnotationStoreStoreOptionsTsvStoreOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}.

---

### OmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

const omicsAnnotationStoreStoreOptionsTsvStoreOptions: omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType">annotationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader">formatToHeader</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema">schema</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}. |

---

##### `annotationType`<sup>Optional</sup> <a name="annotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType"></a>

```typescript
public readonly annotationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}.

---

##### `formatToHeader`<sup>Optional</sup> <a name="formatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader"></a>

```typescript
public readonly formatToHeader: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema"></a>

```typescript
public readonly schema: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsAnnotationStoreReferenceOutputReference <a name="OmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

new omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn">resetReferenceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceArn` <a name="resetReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn"></a>

```typescript
public resetReferenceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput">referenceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn">referenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceArnInput`<sup>Optional</sup> <a name="referenceArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput"></a>

```typescript
public readonly referenceArnInput: string;
```

- *Type:* string

---

##### `referenceArn`<sup>Required</sup> <a name="referenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```typescript
public readonly referenceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsAnnotationStoreReference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---


### OmicsAnnotationStoreSseConfigOutputReference <a name="OmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

new omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn"></a>

```typescript
public resetKeyArn(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsAnnotationStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---


### OmicsAnnotationStoreStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

new omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions">putTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions">resetTsvStoreOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTsvStoreOptions` <a name="putTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions"></a>

```typescript
public putTsvStoreOptions(value: OmicsAnnotationStoreStoreOptionsTsvStoreOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `resetTsvStoreOptions` <a name="resetTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions"></a>

```typescript
public resetTsvStoreOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">tsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput">tsvStoreOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tsvStoreOptions`<sup>Required</sup> <a name="tsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```typescript
public readonly tsvStoreOptions: OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `tsvStoreOptionsInput`<sup>Optional</sup> <a name="tsvStoreOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput"></a>

```typescript
public readonly tsvStoreOptionsInput: IResolvable | OmicsAnnotationStoreStoreOptionsTsvStoreOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsAnnotationStoreStoreOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---


### OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```typescript
import { omicsAnnotationStore } from '@cdktn/provider-awscc'

new omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType">resetAnnotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader">resetFormatToHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotationType` <a name="resetAnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType"></a>

```typescript
public resetAnnotationType(): void
```

##### `resetFormatToHeader` <a name="resetFormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader"></a>

```typescript
public resetFormatToHeader(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput">annotationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput">formatToHeaderInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput">schemaInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">annotationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">formatToHeader</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">schema</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotationTypeInput`<sup>Optional</sup> <a name="annotationTypeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput"></a>

```typescript
public readonly annotationTypeInput: string;
```

- *Type:* string

---

##### `formatToHeaderInput`<sup>Optional</sup> <a name="formatToHeaderInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput"></a>

```typescript
public readonly formatToHeaderInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```typescript
public readonly annotationType: string;
```

- *Type:* string

---

##### `formatToHeader`<sup>Required</sup> <a name="formatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```typescript
public readonly formatToHeader: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```typescript
public readonly schema: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsAnnotationStoreStoreOptionsTsvStoreOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---



