# `dataAwsccLookoutmetricsAnomalyDetector` Submodule <a name="`dataAwsccLookoutmetricsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLookoutmetricsAnomalyDetector <a name="DataAwsccLookoutmetricsAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lookoutmetrics_anomaly_detector awscc_lookoutmetrics_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector(scope: Construct, id: string, config: DataAwsccLookoutmetricsAnomalyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig">DataAwsccLookoutmetricsAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig">DataAwsccLookoutmetricsAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isConstruct"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformElement"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformDataSource"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLookoutmetricsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLookoutmetricsAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLookoutmetricsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lookoutmetrics_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLookoutmetricsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.anomalyDetectorConfig">anomalyDetectorConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.anomalyDetectorDescription">anomalyDetectorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.metricSetList">metricSetList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `anomalyDetectorConfig`<sup>Required</sup> <a name="anomalyDetectorConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.anomalyDetectorConfig"></a>

```typescript
public readonly anomalyDetectorConfig: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference</a>

---

##### `anomalyDetectorDescription`<sup>Required</sup> <a name="anomalyDetectorDescription" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.anomalyDetectorDescription"></a>

```typescript
public readonly anomalyDetectorDescription: string;
```

- *Type:* string

---

##### `anomalyDetectorName`<sup>Required</sup> <a name="anomalyDetectorName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `metricSetList`<sup>Required</sup> <a name="metricSetList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.metricSetList"></a>

```typescript
public readonly metricSetList: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lookoutmetrics_anomaly_detector#id DataAwsccLookoutmetricsAnomalyDetector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct = { ... }
```


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn: dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency">anomalyDetectorFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig">DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anomalyDetectorFrequency`<sup>Required</sup> <a name="anomalyDetectorFrequency" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.anomalyDetectorFrequency"></a>

```typescript
public readonly anomalyDetectorFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig">DataAwsccLookoutmetricsAnomalyDetectorAnomalyDetectorConfig</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get"></a>

```typescript
public get(index: number): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction">aggregationFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationFunction`<sup>Required</sup> <a name="aggregationFunction" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.aggregationFunction"></a>

```typescript
public readonly aggregationFunction: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStruct</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName">flowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfig</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfig</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig">appFlowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig">rdsSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig">redshiftSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig">s3SourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appFlowConfig`<sup>Required</sup> <a name="appFlowConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.appFlowConfig"></a>

```typescript
public readonly appFlowConfig: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceAppFlowConfigOutputReference</a>

---

##### `cloudwatchConfig`<sup>Required</sup> <a name="cloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceCloudwatchConfigOutputReference</a>

---

##### `rdsSourceConfig`<sup>Required</sup> <a name="rdsSourceConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.rdsSourceConfig"></a>

```typescript
public readonly rdsSourceConfig: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference</a>

---

##### `redshiftSourceConfig`<sup>Required</sup> <a name="redshiftSourceConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.redshiftSourceConfig"></a>

```typescript
public readonly redshiftSourceConfig: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference</a>

---

##### `s3SourceConfig`<sup>Required</sup> <a name="s3SourceConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.s3SourceConfig"></a>

```typescript
public readonly s3SourceConfig: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSource</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost">databaseHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort">databasePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseHost`<sup>Required</sup> <a name="databaseHost" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databasePort`<sup>Required</sup> <a name="databasePort" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.databasePort"></a>

```typescript
public readonly databasePort: number;
```

- *Type:* number

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfig</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRdsSourceConfigVpcConfiguration</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost">databaseHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort">databasePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `databaseHost`<sup>Required</sup> <a name="databaseHost" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseHost"></a>

```typescript
public readonly databaseHost: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databasePort`<sup>Required</sup> <a name="databasePort" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.databasePort"></a>

```typescript
public readonly databasePort: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfig</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceRedshiftSourceConfigVpcConfiguration</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader">containsHeader</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression">fileCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList">headerList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol">quoteSymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `charset`<sup>Required</sup> <a name="charset" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.containsHeader"></a>

```typescript
public readonly containsHeader: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `fileCompression`<sup>Required</sup> <a name="fileCompression" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.fileCompression"></a>

```typescript
public readonly fileCompression: string;
```

- *Type:* string

---

##### `headerList`<sup>Required</sup> <a name="headerList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.headerList"></a>

```typescript
public readonly headerList: string[];
```

- *Type:* string[]

---

##### `quoteSymbol`<sup>Required</sup> <a name="quoteSymbol" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.quoteSymbol"></a>

```typescript
public readonly quoteSymbol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptor</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset">charset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression">fileCompression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `charset`<sup>Required</sup> <a name="charset" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.charset"></a>

```typescript
public readonly charset: string;
```

- *Type:* string

---

##### `fileCompression`<sup>Required</sup> <a name="fileCompression" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.fileCompression"></a>

```typescript
public readonly fileCompression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptor</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor">csvFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor">jsonFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvFormatDescriptor`<sup>Required</sup> <a name="csvFormatDescriptor" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.csvFormatDescriptor"></a>

```typescript
public readonly csvFormatDescriptor: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorCsvFormatDescriptorOutputReference</a>

---

##### `jsonFormatDescriptor`<sup>Required</sup> <a name="jsonFormatDescriptor" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.jsonFormatDescriptor"></a>

```typescript
public readonly jsonFormatDescriptor: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorJsonFormatDescriptorOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptor</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor">fileFormatDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList">historicalDataPathList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList">templatedPathList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileFormatDescriptor`<sup>Required</sup> <a name="fileFormatDescriptor" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.fileFormatDescriptor"></a>

```typescript
public readonly fileFormatDescriptor: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigFileFormatDescriptorOutputReference</a>

---

##### `historicalDataPathList`<sup>Required</sup> <a name="historicalDataPathList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.historicalDataPathList"></a>

```typescript
public readonly historicalDataPathList: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `templatedPathList`<sup>Required</sup> <a name="templatedPathList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.templatedPathList"></a>

```typescript
public readonly templatedPathList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceS3SourceConfig</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.get"></a>

```typescript
public get(index: number): DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList">dimensionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList">metricList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription">metricSetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency">metricSetFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName">metricSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource">metricSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn">timestampColumn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionList`<sup>Required</sup> <a name="dimensionList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.dimensionList"></a>

```typescript
public readonly dimensionList: string[];
```

- *Type:* string[]

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricList"></a>

```typescript
public readonly metricList: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricListStructList</a>

---

##### `metricSetDescription`<sup>Required</sup> <a name="metricSetDescription" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetDescription"></a>

```typescript
public readonly metricSetDescription: string;
```

- *Type:* string

---

##### `metricSetFrequency`<sup>Required</sup> <a name="metricSetFrequency" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetFrequency"></a>

```typescript
public readonly metricSetFrequency: string;
```

- *Type:* string

---

##### `metricSetName`<sup>Required</sup> <a name="metricSetName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSetName"></a>

```typescript
public readonly metricSetName: string;
```

- *Type:* string

---

##### `metricSource`<sup>Required</sup> <a name="metricSource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.metricSource"></a>

```typescript
public readonly metricSource: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListMetricSourceOutputReference</a>

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `timestampColumn`<sup>Required</sup> <a name="timestampColumn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timestampColumn"></a>

```typescript
public readonly timestampColumn: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListStruct</a>

---


### DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference <a name="DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAnomalyDetector } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat">columnFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnFormat`<sup>Required</sup> <a name="columnFormat" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnFormat"></a>

```typescript
public readonly columnFormat: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAnomalyDetector.DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn">DataAwsccLookoutmetricsAnomalyDetectorMetricSetListTimestampColumn</a>

---



