# `omicsSequenceStore` Submodule <a name="`omicsSequenceStore` Submodule" id="@cdktn/provider-awscc.omicsSequenceStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsSequenceStore <a name="OmicsSequenceStore" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store awscc_omics_sequence_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

new omicsSequenceStore.OmicsSequenceStore(scope: Construct, id: string, config: OmicsSequenceStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig">OmicsSequenceStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig">OmicsSequenceStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig">putSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation">resetAccessLogLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily">resetETagAlgorithmFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation">resetFallbackLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags">resetPropagatedSetLevelTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy">resetS3AccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig">resetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseConfig` <a name="putSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig"></a>

```typescript
public putSseConfig(value: OmicsSequenceStoreSseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `resetAccessLogLocation` <a name="resetAccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation"></a>

```typescript
public resetAccessLogLocation(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetETagAlgorithmFamily` <a name="resetETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily"></a>

```typescript
public resetETagAlgorithmFamily(): void
```

##### `resetFallbackLocation` <a name="resetFallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation"></a>

```typescript
public resetFallbackLocation(): void
```

##### `resetPropagatedSetLevelTags` <a name="resetPropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags"></a>

```typescript
public resetPropagatedSetLevelTags(): void
```

##### `resetS3AccessPolicy` <a name="resetS3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy"></a>

```typescript
public resetS3AccessPolicy(): void
```

##### `resetSseConfig` <a name="resetSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig"></a>

```typescript
public resetSseConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

omicsSequenceStore.OmicsSequenceStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

omicsSequenceStore.OmicsSequenceStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

omicsSequenceStore.OmicsSequenceStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

omicsSequenceStore.OmicsSequenceStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsSequenceStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsSequenceStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsSequenceStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn">s3AccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId">sequenceStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput">accessLogLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput">eTagAlgorithmFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput">fallbackLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput">propagatedSetLevelTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput">s3AccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput">sseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation">accessLogLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily">eTagAlgorithmFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation">fallbackLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags">propagatedSetLevelTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy">s3AccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `s3AccessPointArn`<sup>Required</sup> <a name="s3AccessPointArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn"></a>

```typescript
public readonly s3AccessPointArn: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `sequenceStoreId`<sup>Required</sup> <a name="sequenceStoreId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId"></a>

```typescript
public readonly sequenceStoreId: string;
```

- *Type:* string

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsSequenceStoreSseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessLogLocationInput`<sup>Optional</sup> <a name="accessLogLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput"></a>

```typescript
public readonly accessLogLocationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eTagAlgorithmFamilyInput`<sup>Optional</sup> <a name="eTagAlgorithmFamilyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput"></a>

```typescript
public readonly eTagAlgorithmFamilyInput: string;
```

- *Type:* string

---

##### `fallbackLocationInput`<sup>Optional</sup> <a name="fallbackLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput"></a>

```typescript
public readonly fallbackLocationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propagatedSetLevelTagsInput`<sup>Optional</sup> <a name="propagatedSetLevelTagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput"></a>

```typescript
public readonly propagatedSetLevelTagsInput: string[];
```

- *Type:* string[]

---

##### `s3AccessPolicyInput`<sup>Optional</sup> <a name="s3AccessPolicyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput"></a>

```typescript
public readonly s3AccessPolicyInput: string;
```

- *Type:* string

---

##### `sseConfigInput`<sup>Optional</sup> <a name="sseConfigInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput"></a>

```typescript
public readonly sseConfigInput: IResolvable | OmicsSequenceStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accessLogLocation`<sup>Required</sup> <a name="accessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation"></a>

```typescript
public readonly accessLogLocation: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eTagAlgorithmFamily`<sup>Required</sup> <a name="eTagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily"></a>

```typescript
public readonly eTagAlgorithmFamily: string;
```

- *Type:* string

---

##### `fallbackLocation`<sup>Required</sup> <a name="fallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation"></a>

```typescript
public readonly fallbackLocation: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `propagatedSetLevelTags`<sup>Required</sup> <a name="propagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags"></a>

```typescript
public readonly propagatedSetLevelTags: string[];
```

- *Type:* string[]

---

##### `s3AccessPolicy`<sup>Required</sup> <a name="s3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy"></a>

```typescript
public readonly s3AccessPolicy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsSequenceStoreConfig <a name="OmicsSequenceStoreConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.Initializer"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

const omicsSequenceStoreConfig: omicsSequenceStore.OmicsSequenceStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name">name</a></code> | <code>string</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation">accessLogLocation</a></code> | <code>string</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description">description</a></code> | <code>string</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily">eTagAlgorithmFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation">fallbackLocation</a></code> | <code>string</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags">propagatedSetLevelTags</a></code> | <code>string[]</code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy">s3AccessPolicy</a></code> | <code>string</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `accessLogLocation`<sup>Optional</sup> <a name="accessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation"></a>

```typescript
public readonly accessLogLocation: string;
```

- *Type:* string

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `eTagAlgorithmFamily`<sup>Optional</sup> <a name="eTagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily"></a>

```typescript
public readonly eTagAlgorithmFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `fallbackLocation`<sup>Optional</sup> <a name="fallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation"></a>

```typescript
public readonly fallbackLocation: string;
```

- *Type:* string

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `propagatedSetLevelTags`<sup>Optional</sup> <a name="propagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags"></a>

```typescript
public readonly propagatedSetLevelTags: string[];
```

- *Type:* string[]

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `s3AccessPolicy`<sup>Optional</sup> <a name="s3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy"></a>

```typescript
public readonly s3AccessPolicy: string;
```

- *Type:* string

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig"></a>

```typescript
public readonly sseConfig: OmicsSequenceStoreSseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

### OmicsSequenceStoreSseConfig <a name="OmicsSequenceStoreSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.Initializer"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

const omicsSequenceStoreSseConfig: omicsSequenceStore.OmicsSequenceStoreSseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn">keyArn</a></code> | <code>string</code> | An encryption key ARN. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#key_arn OmicsSequenceStore#key_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsSequenceStoreSseConfigOutputReference <a name="OmicsSequenceStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer"></a>

```typescript
import { omicsSequenceStore } from '@cdktn/provider-awscc'

new omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn"></a>

```typescript
public resetKeyArn(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OmicsSequenceStoreSseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---



