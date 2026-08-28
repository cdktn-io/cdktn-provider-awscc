# `iotfleetwiseSignalCatalog` Submodule <a name="`iotfleetwiseSignalCatalog` Submodule" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseSignalCatalog <a name="IotfleetwiseSignalCatalog" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog(scope: Construct, id: string, config?: IotfleetwiseSignalCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig">IotfleetwiseSignalCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig">IotfleetwiseSignalCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts">putNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes">putNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodeCounts">resetNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodes">resetNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNodeCounts` <a name="putNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts"></a>

```typescript
public putNodeCounts(value: IotfleetwiseSignalCatalogNodeCounts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---

##### `putNodes` <a name="putNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes"></a>

```typescript
public putNodes(value: IResolvable | IotfleetwiseSignalCatalogNodes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags"></a>

```typescript
public putTags(value: IResolvable | IotfleetwiseSignalCatalogTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNodeCounts` <a name="resetNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodeCounts"></a>

```typescript
public resetNodeCounts(): void
```

##### `resetNodes` <a name="resetNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodes"></a>

```typescript
public resetNodes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseSignalCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseSignalCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseSignalCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCounts">nodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference">IotfleetwiseSignalCatalogNodeCountsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList">IotfleetwiseSignalCatalogNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList">IotfleetwiseSignalCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCountsInput">nodeCountsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodesInput">nodesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `nodeCounts`<sup>Required</sup> <a name="nodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCounts"></a>

```typescript
public readonly nodeCounts: IotfleetwiseSignalCatalogNodeCountsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference">IotfleetwiseSignalCatalogNodeCountsOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodes"></a>

```typescript
public readonly nodes: IotfleetwiseSignalCatalogNodesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList">IotfleetwiseSignalCatalogNodesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tags"></a>

```typescript
public readonly tags: IotfleetwiseSignalCatalogTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList">IotfleetwiseSignalCatalogTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountsInput`<sup>Optional</sup> <a name="nodeCountsInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCountsInput"></a>

```typescript
public readonly nodeCountsInput: IResolvable | IotfleetwiseSignalCatalogNodeCounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---

##### `nodesInput`<sup>Optional</sup> <a name="nodesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodesInput"></a>

```typescript
public readonly nodesInput: IResolvable | IotfleetwiseSignalCatalogNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotfleetwiseSignalCatalogTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseSignalCatalogConfig <a name="IotfleetwiseSignalCatalogConfig" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogConfig: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodeCounts">nodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodes">nodes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}.

---

##### `nodeCounts`<sup>Optional</sup> <a name="nodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodeCounts"></a>

```typescript
public readonly nodeCounts: IotfleetwiseSignalCatalogNodeCounts;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}.

---

##### `nodes`<sup>Optional</sup> <a name="nodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodes"></a>

```typescript
public readonly nodes: IResolvable | IotfleetwiseSignalCatalogNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotfleetwiseSignalCatalogTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}.

---

### IotfleetwiseSignalCatalogNodeCounts <a name="IotfleetwiseSignalCatalogNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogNodeCounts: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts = { ... }
```


### IotfleetwiseSignalCatalogNodes <a name="IotfleetwiseSignalCatalogNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogNodes: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.actuator">actuator</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.attribute">attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.branch">branch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.sensor">sensor</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}. |

---

##### `actuator`<sup>Optional</sup> <a name="actuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.actuator"></a>

```typescript
public readonly actuator: IotfleetwiseSignalCatalogNodesActuator;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.attribute"></a>

```typescript
public readonly attribute: IotfleetwiseSignalCatalogNodesAttribute;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.branch"></a>

```typescript
public readonly branch: IotfleetwiseSignalCatalogNodesBranch;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}.

---

##### `sensor`<sup>Optional</sup> <a name="sensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.sensor"></a>

```typescript
public readonly sensor: IotfleetwiseSignalCatalogNodesSensor;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}.

---

### IotfleetwiseSignalCatalogNodesActuator <a name="IotfleetwiseSignalCatalogNodesActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogNodesActuator: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.assignedValue">assignedValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `assignedValue`<sup>Optional</sup> <a name="assignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.assignedValue"></a>

```typescript
public readonly assignedValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogNodesAttribute <a name="IotfleetwiseSignalCatalogNodesAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogNodesAttribute: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.assignedValue">assignedValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `assignedValue`<sup>Optional</sup> <a name="assignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.assignedValue"></a>

```typescript
public readonly assignedValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogNodesBranch <a name="IotfleetwiseSignalCatalogNodesBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogNodesBranch: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

### IotfleetwiseSignalCatalogNodesSensor <a name="IotfleetwiseSignalCatalogNodesSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogNodesSensor: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `max`<sup>Optional</sup> <a name="max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogTags <a name="IotfleetwiseSignalCatalogTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

const iotfleetwiseSignalCatalogTags: iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseSignalCatalogNodeCountsOutputReference <a name="IotfleetwiseSignalCatalogNodeCountsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators">totalActuators</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes">totalAttributes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches">totalBranches</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes">totalNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors">totalSensors</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalActuators`<sup>Required</sup> <a name="totalActuators" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators"></a>

```typescript
public readonly totalActuators: number;
```

- *Type:* number

---

##### `totalAttributes`<sup>Required</sup> <a name="totalAttributes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes"></a>

```typescript
public readonly totalAttributes: number;
```

- *Type:* number

---

##### `totalBranches`<sup>Required</sup> <a name="totalBranches" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches"></a>

```typescript
public readonly totalBranches: number;
```

- *Type:* number

---

##### `totalNodes`<sup>Required</sup> <a name="totalNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes"></a>

```typescript
public readonly totalNodes: number;
```

- *Type:* number

---

##### `totalSensors`<sup>Required</sup> <a name="totalSensors" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors"></a>

```typescript
public readonly totalSensors: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodeCounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---


### IotfleetwiseSignalCatalogNodesActuatorOutputReference <a name="IotfleetwiseSignalCatalogNodesActuatorOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAssignedValue">resetAssignedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetAssignedValue` <a name="resetAssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAssignedValue"></a>

```typescript
public resetAssignedValue(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetFullyQualifiedName"></a>

```typescript
public resetFullyQualifiedName(): void
```

##### `resetMax` <a name="resetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValueInput">assignedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue">assignedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `assignedValueInput`<sup>Optional</sup> <a name="assignedValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValueInput"></a>

```typescript
public readonly assignedValueInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedNameInput"></a>

```typescript
public readonly fullyQualifiedNameInput: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `assignedValue`<sup>Required</sup> <a name="assignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue"></a>

```typescript
public readonly assignedValue: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodesActuator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---


### IotfleetwiseSignalCatalogNodesAttributeOutputReference <a name="IotfleetwiseSignalCatalogNodesAttributeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAssignedValue">resetAssignedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetAssignedValue` <a name="resetAssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAssignedValue"></a>

```typescript
public resetAssignedValue(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetFullyQualifiedName"></a>

```typescript
public resetFullyQualifiedName(): void
```

##### `resetMax` <a name="resetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValueInput">assignedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue">assignedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `assignedValueInput`<sup>Optional</sup> <a name="assignedValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValueInput"></a>

```typescript
public readonly assignedValueInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedNameInput"></a>

```typescript
public readonly fullyQualifiedNameInput: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `assignedValue`<sup>Required</sup> <a name="assignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue"></a>

```typescript
public readonly assignedValue: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodesAttribute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---


### IotfleetwiseSignalCatalogNodesBranchOutputReference <a name="IotfleetwiseSignalCatalogNodesBranchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetFullyQualifiedName"></a>

```typescript
public resetFullyQualifiedName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedNameInput"></a>

```typescript
public readonly fullyQualifiedNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodesBranch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---


### IotfleetwiseSignalCatalogNodesList <a name="IotfleetwiseSignalCatalogNodesList" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get"></a>

```typescript
public get(index: number): IotfleetwiseSignalCatalogNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>[]

---


### IotfleetwiseSignalCatalogNodesOutputReference <a name="IotfleetwiseSignalCatalogNodesOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator">putActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch">putBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor">putSensor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetActuator">resetActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetSensor">resetSensor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActuator` <a name="putActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator"></a>

```typescript
public putActuator(value: IotfleetwiseSignalCatalogNodesActuator): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---

##### `putAttribute` <a name="putAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute"></a>

```typescript
public putAttribute(value: IotfleetwiseSignalCatalogNodesAttribute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---

##### `putBranch` <a name="putBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch"></a>

```typescript
public putBranch(value: IotfleetwiseSignalCatalogNodesBranch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---

##### `putSensor` <a name="putSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor"></a>

```typescript
public putSensor(value: IotfleetwiseSignalCatalogNodesSensor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---

##### `resetActuator` <a name="resetActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetActuator"></a>

```typescript
public resetActuator(): void
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetSensor` <a name="resetSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetSensor"></a>

```typescript
public resetSensor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuator">actuator</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference">IotfleetwiseSignalCatalogNodesActuatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attribute">attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference">IotfleetwiseSignalCatalogNodesAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branch">branch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference">IotfleetwiseSignalCatalogNodesBranchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensor">sensor</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference">IotfleetwiseSignalCatalogNodesSensorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuatorInput">actuatorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attributeInput">attributeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branchInput">branchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensorInput">sensorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actuator`<sup>Required</sup> <a name="actuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuator"></a>

```typescript
public readonly actuator: IotfleetwiseSignalCatalogNodesActuatorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference">IotfleetwiseSignalCatalogNodesActuatorOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attribute"></a>

```typescript
public readonly attribute: IotfleetwiseSignalCatalogNodesAttributeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference">IotfleetwiseSignalCatalogNodesAttributeOutputReference</a>

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branch"></a>

```typescript
public readonly branch: IotfleetwiseSignalCatalogNodesBranchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference">IotfleetwiseSignalCatalogNodesBranchOutputReference</a>

---

##### `sensor`<sup>Required</sup> <a name="sensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensor"></a>

```typescript
public readonly sensor: IotfleetwiseSignalCatalogNodesSensorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference">IotfleetwiseSignalCatalogNodesSensorOutputReference</a>

---

##### `actuatorInput`<sup>Optional</sup> <a name="actuatorInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuatorInput"></a>

```typescript
public readonly actuatorInput: IResolvable | IotfleetwiseSignalCatalogNodesActuator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: IResolvable | IotfleetwiseSignalCatalogNodesAttribute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: IResolvable | IotfleetwiseSignalCatalogNodesBranch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---

##### `sensorInput`<sup>Optional</sup> <a name="sensorInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensorInput"></a>

```typescript
public readonly sensorInput: IResolvable | IotfleetwiseSignalCatalogNodesSensor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes">IotfleetwiseSignalCatalogNodes</a>

---


### IotfleetwiseSignalCatalogNodesSensorOutputReference <a name="IotfleetwiseSignalCatalogNodesSensorOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMin">resetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDataType` <a name="resetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetFullyQualifiedName"></a>

```typescript
public resetFullyQualifiedName(): void
```

##### `resetMax` <a name="resetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMax"></a>

```typescript
public resetMax(): void
```

##### `resetMin` <a name="resetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMin"></a>

```typescript
public resetMin(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedNameInput"></a>

```typescript
public readonly fullyQualifiedNameInput: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogNodesSensor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---


### IotfleetwiseSignalCatalogTagsList <a name="IotfleetwiseSignalCatalogTagsList" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get"></a>

```typescript
public get(index: number): IotfleetwiseSignalCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>[]

---


### IotfleetwiseSignalCatalogTagsOutputReference <a name="IotfleetwiseSignalCatalogTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseSignalCatalog } from '@cdktn/provider-awscc'

new iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseSignalCatalogTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags">IotfleetwiseSignalCatalogTags</a>

---



