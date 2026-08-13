# `dataAwsccLookoutmetricsAlert` Submodule <a name="`dataAwsccLookoutmetricsAlert` Submodule" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLookoutmetricsAlert <a name="DataAwsccLookoutmetricsAlert" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lookoutmetrics_alert awscc_lookoutmetrics_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert(scope: Construct, id: string, config: DataAwsccLookoutmetricsAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig">DataAwsccLookoutmetricsAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig">DataAwsccLookoutmetricsAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLookoutmetricsAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLookoutmetricsAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLookoutmetricsAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLookoutmetricsAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLookoutmetricsAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference">DataAwsccLookoutmetricsAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertDescription">alertDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertName">alertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertSensitivityThreshold">alertSensitivityThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.anomalyDetectorArn">anomalyDetectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.action"></a>

```typescript
public readonly action: DataAwsccLookoutmetricsAlertActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference">DataAwsccLookoutmetricsAlertActionOutputReference</a>

---

##### `alertDescription`<sup>Required</sup> <a name="alertDescription" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertDescription"></a>

```typescript
public readonly alertDescription: string;
```

- *Type:* string

---

##### `alertName`<sup>Required</sup> <a name="alertName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

---

##### `alertSensitivityThreshold`<sup>Required</sup> <a name="alertSensitivityThreshold" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertSensitivityThreshold"></a>

```typescript
public readonly alertSensitivityThreshold: number;
```

- *Type:* number

---

##### `anomalyDetectorArn`<sup>Required</sup> <a name="anomalyDetectorArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.anomalyDetectorArn"></a>

```typescript
public readonly anomalyDetectorArn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLookoutmetricsAlertAction <a name="DataAwsccLookoutmetricsAlertAction" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAlertAction: dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction = { ... }
```


### DataAwsccLookoutmetricsAlertActionLambdaConfiguration <a name="DataAwsccLookoutmetricsAlertActionLambdaConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAlertActionLambdaConfiguration: dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration = { ... }
```


### DataAwsccLookoutmetricsAlertActionSnsConfiguration <a name="DataAwsccLookoutmetricsAlertActionSnsConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAlertActionSnsConfiguration: dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration = { ... }
```


### DataAwsccLookoutmetricsAlertConfig <a name="DataAwsccLookoutmetricsAlertConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

const dataAwsccLookoutmetricsAlertConfig: dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lookoutmetrics_alert#id DataAwsccLookoutmetricsAlert#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference <a name="DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration">DataAwsccLookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAlertActionLambdaConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration">DataAwsccLookoutmetricsAlertActionLambdaConfiguration</a>

---


### DataAwsccLookoutmetricsAlertActionOutputReference <a name="DataAwsccLookoutmetricsAlertActionOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.lambdaConfiguration">lambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.snsConfiguration">snsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction">DataAwsccLookoutmetricsAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConfiguration`<sup>Required</sup> <a name="lambdaConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.lambdaConfiguration"></a>

```typescript
public readonly lambdaConfiguration: DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference</a>

---

##### `snsConfiguration`<sup>Required</sup> <a name="snsConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.snsConfiguration"></a>

```typescript
public readonly snsConfiguration: DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAlertAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction">DataAwsccLookoutmetricsAlertAction</a>

---


### DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference <a name="DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLookoutmetricsAlert } from '@cdktn/provider-awscc'

new dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration">DataAwsccLookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLookoutmetricsAlertActionSnsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration">DataAwsccLookoutmetricsAlertActionSnsConfiguration</a>

---



