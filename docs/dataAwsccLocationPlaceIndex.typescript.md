# `dataAwsccLocationPlaceIndex` Submodule <a name="`dataAwsccLocationPlaceIndex` Submodule" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLocationPlaceIndex <a name="DataAwsccLocationPlaceIndex" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/location_place_index awscc_location_place_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

new dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex(scope: Construct, id: string, config: DataAwsccLocationPlaceIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig">DataAwsccLocationPlaceIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig">DataAwsccLocationPlaceIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLocationPlaceIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isConstruct"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformElement"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformDataSource"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLocationPlaceIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLocationPlaceIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLocationPlaceIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/location_place_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLocationPlaceIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.dataSourceConfiguration">dataSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference">DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.indexArn">indexArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList">DataAwsccLocationPlaceIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `dataSourceConfiguration`<sup>Required</sup> <a name="dataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.dataSourceConfiguration"></a>

```typescript
public readonly dataSourceConfiguration: DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference">DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.indexArn"></a>

```typescript
public readonly indexArn: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.tags"></a>

```typescript
public readonly tags: DataAwsccLocationPlaceIndexTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList">DataAwsccLocationPlaceIndexTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLocationPlaceIndexConfig <a name="DataAwsccLocationPlaceIndexConfig" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

const dataAwsccLocationPlaceIndexConfig: dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/location_place_index#id DataAwsccLocationPlaceIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLocationPlaceIndexDataSourceConfiguration <a name="DataAwsccLocationPlaceIndexDataSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfiguration.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

const dataAwsccLocationPlaceIndexDataSourceConfiguration: dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfiguration = { ... }
```


### DataAwsccLocationPlaceIndexTags <a name="DataAwsccLocationPlaceIndexTags" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTags.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

const dataAwsccLocationPlaceIndexTags: dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference <a name="DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

new dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse">intendedUse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfiguration">DataAwsccLocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intendedUse`<sup>Required</sup> <a name="intendedUse" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse"></a>

```typescript
public readonly intendedUse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLocationPlaceIndexDataSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexDataSourceConfiguration">DataAwsccLocationPlaceIndexDataSourceConfiguration</a>

---


### DataAwsccLocationPlaceIndexTagsList <a name="DataAwsccLocationPlaceIndexTagsList" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

new dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLocationPlaceIndexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLocationPlaceIndexTagsOutputReference <a name="DataAwsccLocationPlaceIndexTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLocationPlaceIndex } from '@cdktn/provider-awscc'

new dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTags">DataAwsccLocationPlaceIndexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLocationPlaceIndexTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLocationPlaceIndex.DataAwsccLocationPlaceIndexTags">DataAwsccLocationPlaceIndexTags</a>

---



