# `dataAwsccCloudwatchResourceMetricsConfiguration` Submodule <a name="`dataAwsccCloudwatchResourceMetricsConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchResourceMetricsConfiguration <a name="DataAwsccCloudwatchResourceMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_resource_metrics_configuration awscc_cloudwatch_resource_metrics_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.NewDataAwsccCloudwatchResourceMetricsConfiguration(scope Construct, id *string, config DataAwsccCloudwatchResourceMetricsConfigurationConfig) DataAwsccCloudwatchResourceMetricsConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig">DataAwsccCloudwatchResourceMetricsConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig">DataAwsccCloudwatchResourceMetricsConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.DataAwsccCloudwatchResourceMetricsConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.DataAwsccCloudwatchResourceMetricsConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.DataAwsccCloudwatchResourceMetricsConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.DataAwsccCloudwatchResourceMetricsConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudwatchResourceMetricsConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudwatchResourceMetricsConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudwatchResourceMetricsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_resource_metrics_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchResourceMetricsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.metricSelections">MetricSelections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList">DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `MetricSelections`<sup>Required</sup> <a name="MetricSelections" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.metricSelections"></a>

```go
func MetricSelections() DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList">DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchResourceMetricsConfigurationConfig <a name="DataAwsccCloudwatchResourceMetricsConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

&dataawscccloudwatchresourcemetricsconfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/cloudwatch_resource_metrics_configuration#id DataAwsccCloudwatchResourceMetricsConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections <a name="DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

&dataawscccloudwatchresourcemetricsconfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList <a name="DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.NewDataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference <a name="DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudwatchresourcemetricsconfiguration"

dataawscccloudwatchresourcemetricsconfiguration.NewDataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetrics">IncludeMetrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections">DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeMetrics`<sup>Required</sup> <a name="IncludeMetrics" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.includeMetrics"></a>

```go
func IncludeMetrics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchResourceMetricsConfiguration.DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections">DataAwsccCloudwatchResourceMetricsConfigurationMetricSelections</a>

---



