# `dataAwsccDatabrewJob` Submodule <a name="`dataAwsccDatabrewJob` Submodule" id="@cdktn/provider-awscc.dataAwsccDatabrewJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatabrewJob <a name="DataAwsccDatabrewJob" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/databrew_job awscc_databrew_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJob(scope Construct, id *string, config DataAwsccDatabrewJobConfig) DataAwsccDatabrewJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig">DataAwsccDatabrewJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig">DataAwsccDatabrewJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatabrewJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.DataAwsccDatabrewJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.DataAwsccDatabrewJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.DataAwsccDatabrewJob_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.DataAwsccDatabrewJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccDatabrewJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccDatabrewJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccDatabrewJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/databrew_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatabrewJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.databaseOutputs">DatabaseOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList">DataAwsccDatabrewJobDatabaseOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dataCatalogOutputs">DataCatalogOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList">DataAwsccDatabrewJobDataCatalogOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.datasetName">DatasetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.jobSample">JobSample</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference">DataAwsccDatabrewJobJobSampleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.logSubscription">LogSubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference">DataAwsccDatabrewJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList">DataAwsccDatabrewJobOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.profileConfiguration">ProfileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.projectName">ProjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.recipe">Recipe</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference">DataAwsccDatabrewJobRecipeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList">DataAwsccDatabrewJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.validationConfigurations">ValidationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList">DataAwsccDatabrewJobValidationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DatabaseOutputs`<sup>Required</sup> <a name="DatabaseOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.databaseOutputs"></a>

```go
func DatabaseOutputs() DataAwsccDatabrewJobDatabaseOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList">DataAwsccDatabrewJobDatabaseOutputsList</a>

---

##### `DataCatalogOutputs`<sup>Required</sup> <a name="DataCatalogOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dataCatalogOutputs"></a>

```go
func DataCatalogOutputs() DataAwsccDatabrewJobDataCatalogOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList">DataAwsccDatabrewJobDataCatalogOutputsList</a>

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.datasetName"></a>

```go
func DatasetName() *string
```

- *Type:* *string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionKeyArn"></a>

```go
func EncryptionKeyArn() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `JobSample`<sup>Required</sup> <a name="JobSample" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.jobSample"></a>

```go
func JobSample() DataAwsccDatabrewJobJobSampleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference">DataAwsccDatabrewJobJobSampleOutputReference</a>

---

##### `LogSubscription`<sup>Required</sup> <a name="LogSubscription" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.logSubscription"></a>

```go
func LogSubscription() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputLocation"></a>

```go
func OutputLocation() DataAwsccDatabrewJobOutputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference">DataAwsccDatabrewJobOutputLocationOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputs"></a>

```go
func Outputs() DataAwsccDatabrewJobOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList">DataAwsccDatabrewJobOutputsList</a>

---

##### `ProfileConfiguration`<sup>Required</sup> <a name="ProfileConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.profileConfiguration"></a>

```go
func ProfileConfiguration() DataAwsccDatabrewJobProfileConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationOutputReference</a>

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.projectName"></a>

```go
func ProjectName() *string
```

- *Type:* *string

---

##### `Recipe`<sup>Required</sup> <a name="Recipe" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.recipe"></a>

```go
func Recipe() DataAwsccDatabrewJobRecipeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference">DataAwsccDatabrewJobRecipeOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tags"></a>

```go
func Tags() DataAwsccDatabrewJobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList">DataAwsccDatabrewJobTagsList</a>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidationConfigurations`<sup>Required</sup> <a name="ValidationConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.validationConfigurations"></a>

```go
func ValidationConfigurations() DataAwsccDatabrewJobValidationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList">DataAwsccDatabrewJobValidationConfigurationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatabrewJobConfig <a name="DataAwsccDatabrewJobConfig" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/databrew_job#id DataAwsccDatabrewJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatabrewJobDatabaseOutputs <a name="DataAwsccDatabrewJobDatabaseOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDatabaseOutputs {

}
```


### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions {

}
```


### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory {

}
```


### DataAwsccDatabrewJobDataCatalogOutputs <a name="DataAwsccDatabrewJobDataCatalogOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDataCatalogOutputs {

}
```


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions {

}
```


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory {

}
```


### DataAwsccDatabrewJobDataCatalogOutputsS3Options <a name="DataAwsccDatabrewJobDataCatalogOutputsS3Options" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDataCatalogOutputsS3Options {

}
```


### DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation <a name="DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation {

}
```


### DataAwsccDatabrewJobJobSample <a name="DataAwsccDatabrewJobJobSample" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobJobSample {

}
```


### DataAwsccDatabrewJobOutputLocation <a name="DataAwsccDatabrewJobOutputLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobOutputLocation {

}
```


### DataAwsccDatabrewJobOutputs <a name="DataAwsccDatabrewJobOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobOutputs {

}
```


### DataAwsccDatabrewJobOutputsFormatOptions <a name="DataAwsccDatabrewJobOutputsFormatOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobOutputsFormatOptions {

}
```


### DataAwsccDatabrewJobOutputsFormatOptionsCsv <a name="DataAwsccDatabrewJobOutputsFormatOptionsCsv" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobOutputsFormatOptionsCsv {

}
```


### DataAwsccDatabrewJobOutputsLocation <a name="DataAwsccDatabrewJobOutputsLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobOutputsLocation {

}
```


### DataAwsccDatabrewJobProfileConfiguration <a name="DataAwsccDatabrewJobProfileConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfiguration {

}
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations {

}
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors {

}
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics {

}
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides {

}
```


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration {

}
```


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides {

}
```


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration {

}
```


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics {

}
```


### DataAwsccDatabrewJobProfileConfigurationProfileColumns <a name="DataAwsccDatabrewJobProfileConfigurationProfileColumns" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobProfileConfigurationProfileColumns {

}
```


### DataAwsccDatabrewJobRecipe <a name="DataAwsccDatabrewJobRecipe" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobRecipe {

}
```


### DataAwsccDatabrewJobTags <a name="DataAwsccDatabrewJobTags" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobTags {

}
```


### DataAwsccDatabrewJobValidationConfigurations <a name="DataAwsccDatabrewJobValidationConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

&dataawsccdatabrewjob.DataAwsccDatabrewJobValidationConfigurations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```go
func TempDirectory() DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions</a>

---


### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---


### DataAwsccDatabrewJobDatabaseOutputsList <a name="DataAwsccDatabrewJobDatabaseOutputsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDatabaseOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobDatabaseOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobDatabaseOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobDatabaseOutputsOutputReference <a name="DataAwsccDatabrewJobDatabaseOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDatabaseOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobDatabaseOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOptions">DatabaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode">DatabaseOutputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName">GlueConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs">DataAwsccDatabrewJobDatabaseOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseOptions`<sup>Required</sup> <a name="DatabaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOptions"></a>

```go
func DatabaseOptions() DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a>

---

##### `DatabaseOutputMode`<sup>Required</sup> <a name="DatabaseOutputMode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode"></a>

```go
func DatabaseOutputMode() *string
```

- *Type:* *string

---

##### `GlueConnectionName`<sup>Required</sup> <a name="GlueConnectionName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName"></a>

```go
func GlueConnectionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDatabaseOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs">DataAwsccDatabrewJobDatabaseOutputs</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory">TempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TempDirectory`<sup>Required</sup> <a name="TempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```go
func TempDirectory() DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsList <a name="DataAwsccDatabrewJobDataCatalogOutputsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDataCatalogOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobDataCatalogOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobDataCatalogOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobDataCatalogOutputsOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDataCatalogOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobDataCatalogOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions">DatabaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.overwrite">Overwrite</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.s3Options">S3Options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs">DataAwsccDatabrewJobDataCatalogOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseOptions`<sup>Required</sup> <a name="DatabaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions"></a>

```go
func DatabaseOptions() DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a>

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.overwrite"></a>

```go
func Overwrite() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `S3Options`<sup>Required</sup> <a name="S3Options" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.s3Options"></a>

```go
func S3Options() DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDataCatalogOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs">DataAwsccDatabrewJobDataCatalogOutputs</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options">DataAwsccDatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location"></a>

```go
func Location() DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobDataCatalogOutputsS3Options
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options">DataAwsccDatabrewJobDataCatalogOutputsS3Options</a>

---


### DataAwsccDatabrewJobJobSampleOutputReference <a name="DataAwsccDatabrewJobJobSampleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobJobSampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobJobSampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample">DataAwsccDatabrewJobJobSample</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobJobSample
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample">DataAwsccDatabrewJobJobSample</a>

---


### DataAwsccDatabrewJobOutputLocationOutputReference <a name="DataAwsccDatabrewJobOutputLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobOutputLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobOutputLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation">DataAwsccDatabrewJobOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobOutputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation">DataAwsccDatabrewJobOutputLocation</a>

---


### DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference <a name="DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv">DataAwsccDatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobOutputsFormatOptionsCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv">DataAwsccDatabrewJobOutputsFormatOptionsCsv</a>

---


### DataAwsccDatabrewJobOutputsFormatOptionsOutputReference <a name="DataAwsccDatabrewJobOutputsFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobOutputsFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobOutputsFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions">DataAwsccDatabrewJobOutputsFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.csv"></a>

```go
func Csv() DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobOutputsFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions">DataAwsccDatabrewJobOutputsFormatOptions</a>

---


### DataAwsccDatabrewJobOutputsList <a name="DataAwsccDatabrewJobOutputsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobOutputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobOutputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobOutputsLocationOutputReference <a name="DataAwsccDatabrewJobOutputsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobOutputsLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobOutputsLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation">DataAwsccDatabrewJobOutputsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobOutputsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation">DataAwsccDatabrewJobOutputsLocation</a>

---


### DataAwsccDatabrewJobOutputsOutputReference <a name="DataAwsccDatabrewJobOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.compressionFormat">CompressionFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference">DataAwsccDatabrewJobOutputsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.maxOutputFiles">MaxOutputFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.overwrite">Overwrite</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.partitionColumns">PartitionColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs">DataAwsccDatabrewJobOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionFormat`<sup>Required</sup> <a name="CompressionFormat" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.compressionFormat"></a>

```go
func CompressionFormat() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.formatOptions"></a>

```go
func FormatOptions() DataAwsccDatabrewJobOutputsFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsOutputReference</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.location"></a>

```go
func Location() DataAwsccDatabrewJobOutputsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference">DataAwsccDatabrewJobOutputsLocationOutputReference</a>

---

##### `MaxOutputFiles`<sup>Required</sup> <a name="MaxOutputFiles" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.maxOutputFiles"></a>

```go
func MaxOutputFiles() *f64
```

- *Type:* *f64

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.overwrite"></a>

```go
func Overwrite() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PartitionColumns`<sup>Required</sup> <a name="PartitionColumns" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.partitionColumns"></a>

```go
func PartitionColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs">DataAwsccDatabrewJobOutputs</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors">Selectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics">Statistics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors"></a>

```go
func Selectors() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a>

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics"></a>

```go
func Statistics() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics">IncludedStatistics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedStatistics`<sup>Required</sup> <a name="IncludedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics"></a>

```go
func IncludedStatistics() *[]*string
```

- *Type:* *[]*string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides"></a>

```go
func Overrides() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>

---


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics">IncludedStatistics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludedStatistics`<sup>Required</sup> <a name="IncludedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics"></a>

```go
func IncludedStatistics() *[]*string
```

- *Type:* *[]*string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides"></a>

```go
func Overrides() DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>

---


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics">Statistics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Statistics`<sup>Required</sup> <a name="Statistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics"></a>

```go
func Statistics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics">AllowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes">EntityTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedStatistics`<sup>Required</sup> <a name="AllowedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics"></a>

```go
func AllowedStatistics() DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a>

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes"></a>

```go
func EntityTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---


### DataAwsccDatabrewJobProfileConfigurationOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobProfileConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations">ColumnStatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration">DatasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration">EntityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.profileColumns">ProfileColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList">DataAwsccDatabrewJobProfileConfigurationProfileColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration">DataAwsccDatabrewJobProfileConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnStatisticsConfigurations`<sup>Required</sup> <a name="ColumnStatisticsConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations"></a>

```go
func ColumnStatisticsConfigurations() DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a>

---

##### `DatasetStatisticsConfiguration`<sup>Required</sup> <a name="DatasetStatisticsConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration"></a>

```go
func DatasetStatisticsConfiguration() DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a>

---

##### `EntityDetectorConfiguration`<sup>Required</sup> <a name="EntityDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration"></a>

```go
func EntityDetectorConfiguration() DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a>

---

##### `ProfileColumns`<sup>Required</sup> <a name="ProfileColumns" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.profileColumns"></a>

```go
func ProfileColumns() DataAwsccDatabrewJobProfileConfigurationProfileColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList">DataAwsccDatabrewJobProfileConfigurationProfileColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration">DataAwsccDatabrewJobProfileConfiguration</a>

---


### DataAwsccDatabrewJobProfileConfigurationProfileColumnsList <a name="DataAwsccDatabrewJobProfileConfigurationProfileColumnsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationProfileColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobProfileConfigurationProfileColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns">DataAwsccDatabrewJobProfileConfigurationProfileColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobProfileConfigurationProfileColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns">DataAwsccDatabrewJobProfileConfigurationProfileColumns</a>

---


### DataAwsccDatabrewJobRecipeOutputReference <a name="DataAwsccDatabrewJobRecipeOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobRecipeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccDatabrewJobRecipeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe">DataAwsccDatabrewJobRecipe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobRecipe
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe">DataAwsccDatabrewJobRecipe</a>

---


### DataAwsccDatabrewJobTagsList <a name="DataAwsccDatabrewJobTagsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobTagsOutputReference <a name="DataAwsccDatabrewJobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags">DataAwsccDatabrewJobTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags">DataAwsccDatabrewJobTags</a>

---


### DataAwsccDatabrewJobValidationConfigurationsList <a name="DataAwsccDatabrewJobValidationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobValidationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccDatabrewJobValidationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccDatabrewJobValidationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccDatabrewJobValidationConfigurationsOutputReference <a name="DataAwsccDatabrewJobValidationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccdatabrewjob"

dataawsccdatabrewjob.NewDataAwsccDatabrewJobValidationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccDatabrewJobValidationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.rulesetArn">RulesetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.validationMode">ValidationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations">DataAwsccDatabrewJobValidationConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RulesetArn`<sup>Required</sup> <a name="RulesetArn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.rulesetArn"></a>

```go
func RulesetArn() *string
```

- *Type:* *string

---

##### `ValidationMode`<sup>Required</sup> <a name="ValidationMode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.validationMode"></a>

```go
func ValidationMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccDatabrewJobValidationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations">DataAwsccDatabrewJobValidationConfigurations</a>

---



