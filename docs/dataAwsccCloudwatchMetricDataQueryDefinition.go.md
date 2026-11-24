# `dataAwsccCloudwatchMetricDataQueryDefinition` Submodule <a name="`dataAwsccCloudwatchMetricDataQueryDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchMetricDataQueryDefinition <a name="DataAwsccCloudwatchMetricDataQueryDefinition" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cloudwatch_metric_data_query_definition awscc_cloudwatch_metric_data_query_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.NewDataAwsccCloudwatchMetricDataQueryDefinition(scope Construct, id *string, config DataAwsccCloudwatchMetricDataQueryDefinitionConfig) DataAwsccCloudwatchMetricDataQueryDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig">DataAwsccCloudwatchMetricDataQueryDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig">DataAwsccCloudwatchMetricDataQueryDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.DataAwsccCloudwatchMetricDataQueryDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.DataAwsccCloudwatchMetricDataQueryDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.DataAwsccCloudwatchMetricDataQueryDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.DataAwsccCloudwatchMetricDataQueryDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudwatchMetricDataQueryDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudwatchMetricDataQueryDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudwatchMetricDataQueryDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cloudwatch_metric_data_query_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchMetricDataQueryDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId">MetricDataQueryDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList">DataAwsccCloudwatchMetricDataQueryDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `MetricDataQueryDefinitionId`<sup>Required</sup> <a name="MetricDataQueryDefinitionId" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.metricDataQueryDefinitionId"></a>

```go
func MetricDataQueryDefinitionId() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.tags"></a>

```go
func Tags() DataAwsccCloudwatchMetricDataQueryDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList">DataAwsccCloudwatchMetricDataQueryDefinitionTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchMetricDataQueryDefinitionConfig <a name="DataAwsccCloudwatchMetricDataQueryDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

&dataawscccloudwatchmetricdataquerydefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cloudwatch_metric_data_query_definition#id DataAwsccCloudwatchMetricDataQueryDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchMetricDataQueryDefinitionTags <a name="DataAwsccCloudwatchMetricDataQueryDefinitionTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

&dataawscccloudwatchmetricdataquerydefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchMetricDataQueryDefinitionTagsList <a name="DataAwsccCloudwatchMetricDataQueryDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.NewDataAwsccCloudwatchMetricDataQueryDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudwatchMetricDataQueryDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference <a name="DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccloudwatchmetricdataquerydefinition"

dataawscccloudwatchmetricdataquerydefinition.NewDataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTags">DataAwsccCloudwatchMetricDataQueryDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudwatchMetricDataQueryDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchMetricDataQueryDefinition.DataAwsccCloudwatchMetricDataQueryDefinitionTags">DataAwsccCloudwatchMetricDataQueryDefinitionTags</a>

---



