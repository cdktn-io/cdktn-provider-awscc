# `dataAwsccConnectMetric` Submodule <a name="`dataAwsccConnectMetric` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectMetric <a name="DataAwsccConnectMetric" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/connect_metric awscc_connect_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetric(scope: Construct, id: string, config: DataAwsccConnectMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig">DataAwsccConnectMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig">DataAwsccConnectMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectMetric resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/connect_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime">createdTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser">createdUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod">creationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime">effectiveTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings">groupings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser">lastModifiedUser</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn">metricArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation">metricCalculation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator">positiveTrendIndicator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource">primaryEventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType">primaryEventSourceEffectiveTimestampType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate">refreshRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats">supportedStats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation">supportsCustomCalculation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation">supportsPreaggregateCalculation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdTime"></a>

```typescript
public readonly createdTime: number;
```

- *Type:* number

---

##### `createdUser`<sup>Required</sup> <a name="createdUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.createdUser"></a>

```typescript
public readonly createdUser: DataAwsccConnectMetricCreatedUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference">DataAwsccConnectMetricCreatedUserOutputReference</a>

---

##### `creationMethod`<sup>Required</sup> <a name="creationMethod" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.creationMethod"></a>

```typescript
public readonly creationMethod: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: number;
```

- *Type:* number

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.filters"></a>

```typescript
public readonly filters: DataAwsccConnectMetricFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList">DataAwsccConnectMetricFiltersList</a>

---

##### `groupings`<sup>Required</sup> <a name="groupings" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.groupings"></a>

```typescript
public readonly groupings: string[];
```

- *Type:* string[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedRegion"></a>

```typescript
public readonly lastModifiedRegion: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `lastModifiedUser`<sup>Required</sup> <a name="lastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.lastModifiedUser"></a>

```typescript
public readonly lastModifiedUser: DataAwsccConnectMetricLastModifiedUserOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference">DataAwsccConnectMetricLastModifiedUserOutputReference</a>

---

##### `metricArn`<sup>Required</sup> <a name="metricArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricArn"></a>

```typescript
public readonly metricArn: string;
```

- *Type:* string

---

##### `metricCalculation`<sup>Required</sup> <a name="metricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.metricCalculation"></a>

```typescript
public readonly metricCalculation: DataAwsccConnectMetricMetricCalculationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference">DataAwsccConnectMetricMetricCalculationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `positiveTrendIndicator`<sup>Required</sup> <a name="positiveTrendIndicator" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.positiveTrendIndicator"></a>

```typescript
public readonly positiveTrendIndicator: string;
```

- *Type:* string

---

##### `primaryEventSource`<sup>Required</sup> <a name="primaryEventSource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSource"></a>

```typescript
public readonly primaryEventSource: string;
```

- *Type:* string

---

##### `primaryEventSourceEffectiveTimestampType`<sup>Required</sup> <a name="primaryEventSourceEffectiveTimestampType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.primaryEventSourceEffectiveTimestampType"></a>

```typescript
public readonly primaryEventSourceEffectiveTimestampType: string;
```

- *Type:* string

---

##### `refreshRate`<sup>Required</sup> <a name="refreshRate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.refreshRate"></a>

```typescript
public readonly refreshRate: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportedStats`<sup>Required</sup> <a name="supportedStats" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportedStats"></a>

```typescript
public readonly supportedStats: string[];
```

- *Type:* string[]

---

##### `supportsCustomCalculation`<sup>Required</sup> <a name="supportsCustomCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsCustomCalculation"></a>

```typescript
public readonly supportsCustomCalculation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `supportsPreaggregateCalculation`<sup>Required</sup> <a name="supportsPreaggregateCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.supportsPreaggregateCalculation"></a>

```typescript
public readonly supportsPreaggregateCalculation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tags"></a>

```typescript
public readonly tags: DataAwsccConnectMetricTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList">DataAwsccConnectMetricTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectMetricConfig <a name="DataAwsccConnectMetricConfig" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricConfig: dataAwsccConnectMetric.DataAwsccConnectMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/connect_metric#id DataAwsccConnectMetric#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectMetricCreatedUser <a name="DataAwsccConnectMetricCreatedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricCreatedUser: dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser = { ... }
```


### DataAwsccConnectMetricFilters <a name="DataAwsccConnectMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricFilters: dataAwsccConnectMetric.DataAwsccConnectMetricFilters = { ... }
```


### DataAwsccConnectMetricLastModifiedUser <a name="DataAwsccConnectMetricLastModifiedUser" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricLastModifiedUser: dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser = { ... }
```


### DataAwsccConnectMetricMetricCalculation <a name="DataAwsccConnectMetricMetricCalculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricMetricCalculation: dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation = { ... }
```


### DataAwsccConnectMetricMetricCalculationCalculationComponents <a name="DataAwsccConnectMetricMetricCalculationCalculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricMetricCalculationCalculationComponents: dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents = { ... }
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters: dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters = { ... }
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition: dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition = { ... }
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition: dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition = { ... }
```


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition: dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition = { ... }
```


### DataAwsccConnectMetricTags <a name="DataAwsccConnectMetricTags" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

const dataAwsccConnectMetricTags: dataAwsccConnectMetric.DataAwsccConnectMetricTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectMetricCreatedUserOutputReference <a name="DataAwsccConnectMetricCreatedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn">awsIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn">connectUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsIdentityArn`<sup>Required</sup> <a name="awsIdentityArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.awsIdentityArn"></a>

```typescript
public readonly awsIdentityArn: string;
```

- *Type:* string

---

##### `connectUserArn`<sup>Required</sup> <a name="connectUserArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.connectUserArn"></a>

```typescript
public readonly connectUserArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricCreatedUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricCreatedUser">DataAwsccConnectMetricCreatedUser</a>

---


### DataAwsccConnectMetricFiltersList <a name="DataAwsccConnectMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccConnectMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectMetricFiltersOutputReference <a name="DataAwsccConnectMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricFilters">DataAwsccConnectMetricFilters</a>

---


### DataAwsccConnectMetricLastModifiedUserOutputReference <a name="DataAwsccConnectMetricLastModifiedUserOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn">awsIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn">connectUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsIdentityArn`<sup>Required</sup> <a name="awsIdentityArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.awsIdentityArn"></a>

```typescript
public readonly awsIdentityArn: string;
```

- *Type:* string

---

##### `connectUserArn`<sup>Required</sup> <a name="connectUserArn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.connectUserArn"></a>

```typescript
public readonly connectUserArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricLastModifiedUser;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricLastModifiedUser">DataAwsccConnectMetricLastModifiedUser</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values">values</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.values"></a>

```typescript
public readonly values: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition">booleanCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey">metricFilterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate">negate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition">numberCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition">stringCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanCondition`<sup>Required</sup> <a name="booleanCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.booleanCondition"></a>

```typescript
public readonly booleanCondition: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersBooleanConditionOutputReference</a>

---

##### `metricFilterKey`<sup>Required</sup> <a name="metricFilterKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.metricFilterKey"></a>

```typescript
public readonly metricFilterKey: string;
```

- *Type:* string

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.negate"></a>

```typescript
public readonly negate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `numberCondition`<sup>Required</sup> <a name="numberCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.numberCondition"></a>

```typescript
public readonly numberCondition: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersNumberConditionOutputReference</a>

---

##### `stringCondition`<sup>Required</sup> <a name="stringCondition" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.stringCondition"></a>

```typescript
public readonly stringCondition: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFilters</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison">comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.comparison"></a>

```typescript
public readonly comparison: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersStringCondition</a>

---


### DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference <a name="DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters">metricFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId">metricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `metricFilters`<sup>Required</sup> <a name="metricFilters" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricFilters"></a>

```typescript
public readonly metricFilters: DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList">DataAwsccConnectMetricMetricCalculationCalculationComponentsMetricFiltersList</a>

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricId"></a>

```typescript
public readonly metricId: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricMetricCalculationCalculationComponents;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponents">DataAwsccConnectMetricMetricCalculationCalculationComponents</a>

---


### DataAwsccConnectMetricMetricCalculationOutputReference <a name="DataAwsccConnectMetricMetricCalculationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation">calculation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents">calculationComponents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `calculation`<sup>Required</sup> <a name="calculation" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculation"></a>

```typescript
public readonly calculation: string;
```

- *Type:* string

---

##### `calculationComponents`<sup>Required</sup> <a name="calculationComponents" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.calculationComponents"></a>

```typescript
public readonly calculationComponents: DataAwsccConnectMetricMetricCalculationCalculationComponentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationCalculationComponentsList">DataAwsccConnectMetricMetricCalculationCalculationComponentsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricMetricCalculation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricMetricCalculation">DataAwsccConnectMetricMetricCalculation</a>

---


### DataAwsccConnectMetricTagsList <a name="DataAwsccConnectMetricTagsList" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectMetricTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectMetricTagsOutputReference <a name="DataAwsccConnectMetricTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectMetric } from '@cdktn/provider-awscc'

new dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectMetricTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectMetric.DataAwsccConnectMetricTags">DataAwsccConnectMetricTags</a>

---



