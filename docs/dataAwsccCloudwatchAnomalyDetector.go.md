# `dataAwsccCloudwatchAnomalyDetector` Submodule <a name="`dataAwsccCloudwatchAnomalyDetector` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchAnomalyDetector <a name="DataAwsccCloudwatchAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetector(scope Construct, id *string, config DataAwsccCloudwatchAnomalyDetectorConfig) DataAwsccCloudwatchAnomalyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig">DataAwsccCloudwatchAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig">DataAwsccCloudwatchAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetector_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudwatchAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudwatchAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudwatchAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.anomalyDetectorId">AnomalyDetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference">DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricCharacteristics">MetricCharacteristics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricMathAnomalyDetector">MetricMathAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.singleMetricAnomalyDetector">SingleMetricAnomalyDetector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AnomalyDetectorId`<sup>Required</sup> <a name="AnomalyDetectorId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.anomalyDetectorId"></a>

```go
func AnomalyDetectorId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.configuration"></a>

```go
func Configuration() DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference">DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.dimensions"></a>

```go
func Dimensions() DataAwsccCloudwatchAnomalyDetectorDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorDimensionsList</a>

---

##### `MetricCharacteristics`<sup>Required</sup> <a name="MetricCharacteristics" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricCharacteristics"></a>

```go
func MetricCharacteristics() DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference</a>

---

##### `MetricMathAnomalyDetector`<sup>Required</sup> <a name="MetricMathAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricMathAnomalyDetector"></a>

```go
func MetricMathAnomalyDetector() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SingleMetricAnomalyDetector`<sup>Required</sup> <a name="SingleMetricAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.singleMetricAnomalyDetector"></a>

```go
func SingleMetricAnomalyDetector() DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference</a>

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchAnomalyDetectorConfig <a name="DataAwsccCloudwatchAnomalyDetectorConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_anomaly_detector#id DataAwsccCloudwatchAnomalyDetector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchAnomalyDetectorConfiguration <a name="DataAwsccCloudwatchAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorConfiguration {

}
```


### DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges {

}
```


### DataAwsccCloudwatchAnomalyDetectorDimensions <a name="DataAwsccCloudwatchAnomalyDetectorDimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorDimensions {

}
```


### DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics <a name="DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics {

}
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector {

}
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries {

}
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat {

}
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric {

}
```


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions {

}
```


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector {

}
```


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

&dataawscccloudwatchanomalydetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRanges</a>

---


### DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges">ExcludedTimeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone">MetricTimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration">DataAwsccCloudwatchAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedTimeRanges`<sup>Required</sup> <a name="ExcludedTimeRanges" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.excludedTimeRanges"></a>

```go
func ExcludedTimeRanges() DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList">DataAwsccCloudwatchAnomalyDetectorConfigurationExcludedTimeRangesList</a>

---

##### `MetricTimeZone`<sup>Required</sup> <a name="MetricTimeZone" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.metricTimeZone"></a>

```go
func MetricTimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorConfiguration">DataAwsccCloudwatchAnomalyDetectorConfiguration</a>

---


### DataAwsccCloudwatchAnomalyDetectorDimensionsList <a name="DataAwsccCloudwatchAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchAnomalyDetectorDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorDimensions</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes">PeriodicSpikes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodicSpikes`<sup>Required</sup> <a name="PeriodicSpikes" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.periodicSpikes"></a>

```go
func PeriodicSpikes() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristicsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics">DataAwsccCloudwatchAnomalyDetectorMetricCharacteristics</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```go
func Metric() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStat</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData">ReturnData</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.metricStat"></a>

```go
func MetricStat() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatOutputReference</a>

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.returnData"></a>

```go
func ReturnData() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueries</a>

---


### DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries">MetricDataQueries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.metricDataQueries"></a>

```go
func MetricDataQueries() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetectorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorMetricMathAnomalyDetector</a>

---


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensions</a>

---


### DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference <a name="DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchanomalydetector"

dataawscccloudwatchanomalydetector.NewDataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.dimensions"></a>

```go
func Dimensions() DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetectorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAnomalyDetector.DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector">DataAwsccCloudwatchAnomalyDetectorSingleMetricAnomalyDetector</a>

---



