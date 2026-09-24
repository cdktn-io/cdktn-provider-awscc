# `dataAwsccBcmScheduledReport` Submodule <a name="`dataAwsccBcmScheduledReport` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmScheduledReport <a name="DataAwsccBcmScheduledReport" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport(scope: Construct, id: string, config: DataAwsccBcmScheduledReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig">DataAwsccBcmScheduledReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig">DataAwsccBcmScheduledReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBcmScheduledReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dashboardArn">dashboardArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.healthStatus">healthStatus</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference">DataAwsccBcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference">DataAwsccBcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduledReportExecutionRoleArn">scheduledReportExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList">DataAwsccBcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetDateRangeOverride">widgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetIds">widgetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.dashboardArn"></a>

```typescript
public readonly dashboardArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.healthStatus"></a>

```typescript
public readonly healthStatus: DataAwsccBcmScheduledReportHealthStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference">DataAwsccBcmScheduledReportHealthStatusOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduleConfig"></a>

```typescript
public readonly scheduleConfig: DataAwsccBcmScheduledReportScheduleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference">DataAwsccBcmScheduledReportScheduleConfigOutputReference</a>

---

##### `scheduledReportExecutionRoleArn`<sup>Required</sup> <a name="scheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```typescript
public readonly scheduledReportExecutionRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tags"></a>

```typescript
public readonly tags: DataAwsccBcmScheduledReportTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList">DataAwsccBcmScheduledReportTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `widgetDateRangeOverride`<sup>Required</sup> <a name="widgetDateRangeOverride" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetDateRangeOverride"></a>

```typescript
public readonly widgetDateRangeOverride: DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `widgetIds`<sup>Required</sup> <a name="widgetIds" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.widgetIds"></a>

```typescript
public readonly widgetIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmScheduledReportConfig <a name="DataAwsccBcmScheduledReportConfig" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportConfig: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcm_scheduled_report#id DataAwsccBcmScheduledReport#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmScheduledReportHealthStatus <a name="DataAwsccBcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportHealthStatus: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus = { ... }
```


### DataAwsccBcmScheduledReportScheduleConfig <a name="DataAwsccBcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportScheduleConfig: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig = { ... }
```


### DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod <a name="DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportScheduleConfigSchedulePeriod: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod = { ... }
```


### DataAwsccBcmScheduledReportTags <a name="DataAwsccBcmScheduledReportTags" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportTags: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags = { ... }
```


### DataAwsccBcmScheduledReportWidgetDateRangeOverride <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportWidgetDateRangeOverride: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride = { ... }
```


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime = { ... }
```


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

const dataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime: dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmScheduledReportHealthStatusOutputReference <a name="DataAwsccBcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">lastRefreshedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus">DataAwsccBcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastRefreshedAt`<sup>Required</sup> <a name="lastRefreshedAt" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```typescript
public readonly lastRefreshedAt: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportHealthStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportHealthStatus">DataAwsccBcmScheduledReportHealthStatus</a>

---


### DataAwsccBcmScheduledReportScheduleConfigOutputReference <a name="DataAwsccBcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">scheduleExpressionTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">schedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig">DataAwsccBcmScheduledReportScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimeZone`<sup>Required</sup> <a name="scheduleExpressionTimeZone" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```typescript
public readonly scheduleExpressionTimeZone: string;
```

- *Type:* string

---

##### `schedulePeriod`<sup>Required</sup> <a name="schedulePeriod" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```typescript
public readonly schedulePeriod: DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportScheduleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfig">DataAwsccBcmScheduledReportScheduleConfig</a>

---


### DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod">DataAwsccBcmScheduledReportScheduleConfigSchedulePeriod</a>

---


### DataAwsccBcmScheduledReportTagsList <a name="DataAwsccBcmScheduledReportTagsList" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBcmScheduledReportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBcmScheduledReportTagsOutputReference <a name="DataAwsccBcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags">DataAwsccBcmScheduledReportTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportTags">DataAwsccBcmScheduledReportTags</a>

---


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride">DataAwsccBcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```typescript
public readonly endTime: DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportWidgetDateRangeOverride;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverride">DataAwsccBcmScheduledReportWidgetDateRangeOverride</a>

---


### DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccBcmScheduledReport } from '@cdktn/provider-awscc'

new dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmScheduledReport.DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime">DataAwsccBcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---



