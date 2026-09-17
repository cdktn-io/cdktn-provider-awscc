# `dataAwsccChimeMediaInsightsPipelineConfiguration` Submodule <a name="`dataAwsccChimeMediaInsightsPipelineConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeMediaInsightsPipelineConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration awscc_chime_media_insights_pipeline_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfiguration(scope Construct, id *string, config DataAwsccChimeMediaInsightsPipelineConfigurationConfig) DataAwsccChimeMediaInsightsPipelineConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig">DataAwsccChimeMediaInsightsPipelineConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig">DataAwsccChimeMediaInsightsPipelineConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccChimeMediaInsightsPipelineConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccChimeMediaInsightsPipelineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccChimeMediaInsightsPipelineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeMediaInsightsPipelineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.elements">Elements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList">DataAwsccChimeMediaInsightsPipelineConfigurationElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn">MediaInsightsPipelineConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId">MediaInsightsPipelineConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName">MediaInsightsPipelineConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration">RealTimeAlertConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn">ResourceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList">DataAwsccChimeMediaInsightsPipelineConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Elements`<sup>Required</sup> <a name="Elements" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.elements"></a>

```go
func Elements() DataAwsccChimeMediaInsightsPipelineConfigurationElementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList">DataAwsccChimeMediaInsightsPipelineConfigurationElementsList</a>

---

##### `MediaInsightsPipelineConfigurationArn`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationArn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationArn"></a>

```go
func MediaInsightsPipelineConfigurationArn() *string
```

- *Type:* *string

---

##### `MediaInsightsPipelineConfigurationId`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationId"></a>

```go
func MediaInsightsPipelineConfigurationId() *string
```

- *Type:* *string

---

##### `MediaInsightsPipelineConfigurationName`<sup>Required</sup> <a name="MediaInsightsPipelineConfigurationName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.mediaInsightsPipelineConfigurationName"></a>

```go
func MediaInsightsPipelineConfigurationName() *string
```

- *Type:* *string

---

##### `RealTimeAlertConfiguration`<sup>Required</sup> <a name="RealTimeAlertConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.realTimeAlertConfiguration"></a>

```go
func RealTimeAlertConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference</a>

---

##### `ResourceAccessRoleArn`<sup>Required</sup> <a name="ResourceAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.resourceAccessRoleArn"></a>

```go
func ResourceAccessRoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tags"></a>

```go
func Tags() DataAwsccChimeMediaInsightsPipelineConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList">DataAwsccChimeMediaInsightsPipelineConfigurationTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeMediaInsightsPipelineConfigurationConfig <a name="DataAwsccChimeMediaInsightsPipelineConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/chime_media_insights_pipeline_configuration#id DataAwsccChimeMediaInsightsPipelineConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeMediaInsightsPipelineConfigurationElements <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElements" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration {

}
```


### DataAwsccChimeMediaInsightsPipelineConfigurationTags <a name="DataAwsccChimeMediaInsightsPipelineConfigurationTags" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

&dataawsccchimemediainsightspipelineconfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories">CallAnalyticsStreamCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType">ContentIdentificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType">ContentRedactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">EnablePartialResultsStabilization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults">FilterPartialResults</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName">LanguageModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability">PartialResultsStability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes">PiiEntityTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings">PostCallAnalyticsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod">VocabularyFilterMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallAnalyticsStreamCategories`<sup>Required</sup> <a name="CallAnalyticsStreamCategories" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.callAnalyticsStreamCategories"></a>

```go
func CallAnalyticsStreamCategories() *[]*string
```

- *Type:* *[]*string

---

##### `ContentIdentificationType`<sup>Required</sup> <a name="ContentIdentificationType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```go
func ContentIdentificationType() *string
```

- *Type:* *string

---

##### `ContentRedactionType`<sup>Required</sup> <a name="ContentRedactionType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```go
func ContentRedactionType() *string
```

- *Type:* *string

---

##### `EnablePartialResultsStabilization`<sup>Required</sup> <a name="EnablePartialResultsStabilization" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```go
func EnablePartialResultsStabilization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FilterPartialResults`<sup>Required</sup> <a name="FilterPartialResults" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```go
func FilterPartialResults() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `LanguageModelName`<sup>Required</sup> <a name="LanguageModelName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.languageModelName"></a>

```go
func LanguageModelName() *string
```

- *Type:* *string

---

##### `PartialResultsStability`<sup>Required</sup> <a name="PartialResultsStability" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```go
func PartialResultsStability() *string
```

- *Type:* *string

---

##### `PiiEntityTypes`<sup>Required</sup> <a name="PiiEntityTypes" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```go
func PiiEntityTypes() *string
```

- *Type:* *string

---

##### `PostCallAnalyticsSettings`<sup>Required</sup> <a name="PostCallAnalyticsSettings" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.postCallAnalyticsSettings"></a>

```go
func PostCallAnalyticsSettings() DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference</a>

---

##### `VocabularyFilterMethod`<sup>Required</sup> <a name="VocabularyFilterMethod" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```go
func VocabularyFilterMethod() *string
```

- *Type:* *string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```go
func VocabularyFilterName() *string
```

- *Type:* *string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.vocabularyName"></a>

```go
func VocabularyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput">ContentRedactionOutput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId">OutputEncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentRedactionOutput`<sup>Required</sup> <a name="ContentRedactionOutput" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.contentRedactionOutput"></a>

```go
func ContentRedactionOutput() *string
```

- *Type:* *string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `OutputEncryptionKmsKeyId`<sup>Required</sup> <a name="OutputEncryptionKmsKeyId" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputEncryptionKmsKeyId"></a>

```go
func OutputEncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType">ContentIdentificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType">ContentRedactionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization">EnablePartialResultsStabilization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults">FilterPartialResults</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage">IdentifyLanguage</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages">IdentifyMultipleLanguages</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName">LanguageModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions">LanguageOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability">PartialResultsStability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes">PiiEntityTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel">ShowSpeakerLabel</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod">VocabularyFilterMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName">VocabularyFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames">VocabularyFilterNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName">VocabularyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames">VocabularyNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentIdentificationType`<sup>Required</sup> <a name="ContentIdentificationType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentIdentificationType"></a>

```go
func ContentIdentificationType() *string
```

- *Type:* *string

---

##### `ContentRedactionType`<sup>Required</sup> <a name="ContentRedactionType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.contentRedactionType"></a>

```go
func ContentRedactionType() *string
```

- *Type:* *string

---

##### `EnablePartialResultsStabilization`<sup>Required</sup> <a name="EnablePartialResultsStabilization" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.enablePartialResultsStabilization"></a>

```go
func EnablePartialResultsStabilization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FilterPartialResults`<sup>Required</sup> <a name="FilterPartialResults" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.filterPartialResults"></a>

```go
func FilterPartialResults() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdentifyLanguage`<sup>Required</sup> <a name="IdentifyLanguage" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyLanguage"></a>

```go
func IdentifyLanguage() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdentifyMultipleLanguages`<sup>Required</sup> <a name="IdentifyMultipleLanguages" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.identifyMultipleLanguages"></a>

```go
func IdentifyMultipleLanguages() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `LanguageModelName`<sup>Required</sup> <a name="LanguageModelName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageModelName"></a>

```go
func LanguageModelName() *string
```

- *Type:* *string

---

##### `LanguageOptions`<sup>Required</sup> <a name="LanguageOptions" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.languageOptions"></a>

```go
func LanguageOptions() *string
```

- *Type:* *string

---

##### `PartialResultsStability`<sup>Required</sup> <a name="PartialResultsStability" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.partialResultsStability"></a>

```go
func PartialResultsStability() *string
```

- *Type:* *string

---

##### `PiiEntityTypes`<sup>Required</sup> <a name="PiiEntityTypes" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.piiEntityTypes"></a>

```go
func PiiEntityTypes() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ShowSpeakerLabel`<sup>Required</sup> <a name="ShowSpeakerLabel" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.showSpeakerLabel"></a>

```go
func ShowSpeakerLabel() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VocabularyFilterMethod`<sup>Required</sup> <a name="VocabularyFilterMethod" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterMethod"></a>

```go
func VocabularyFilterMethod() *string
```

- *Type:* *string

---

##### `VocabularyFilterName`<sup>Required</sup> <a name="VocabularyFilterName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterName"></a>

```go
func VocabularyFilterName() *string
```

- *Type:* *string

---

##### `VocabularyFilterNames`<sup>Required</sup> <a name="VocabularyFilterNames" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyFilterNames"></a>

```go
func VocabularyFilterNames() *string
```

- *Type:* *string

---

##### `VocabularyName`<sup>Required</sup> <a name="VocabularyName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyName"></a>

```go
func VocabularyName() *string
```

- *Type:* *string

---

##### `VocabularyNames`<sup>Required</sup> <a name="VocabularyNames" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.vocabularyNames"></a>

```go
func VocabularyNames() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget">InsightsTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsightsTarget`<sup>Required</sup> <a name="InsightsTarget" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.insightsTarget"></a>

```go
func InsightsTarget() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsList <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsList" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccChimeMediaInsightsPipelineConfigurationElementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.get"></a>

```go
func Get(index *f64) DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration">AmazonTranscribeCallAnalyticsProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration">AmazonTranscribeProcessorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration">KinesisDataStreamSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration">S3RecordingSinkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements">DataAwsccChimeMediaInsightsPipelineConfigurationElements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonTranscribeCallAnalyticsProcessorConfiguration`<sup>Required</sup> <a name="AmazonTranscribeCallAnalyticsProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeCallAnalyticsProcessorConfiguration"></a>

```go
func AmazonTranscribeCallAnalyticsProcessorConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference</a>

---

##### `AmazonTranscribeProcessorConfiguration`<sup>Required</sup> <a name="AmazonTranscribeProcessorConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.amazonTranscribeProcessorConfiguration"></a>

```go
func AmazonTranscribeProcessorConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference</a>

---

##### `KinesisDataStreamSinkConfiguration`<sup>Required</sup> <a name="KinesisDataStreamSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.kinesisDataStreamSinkConfiguration"></a>

```go
func KinesisDataStreamSinkConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference</a>

---

##### `S3RecordingSinkConfiguration`<sup>Required</sup> <a name="S3RecordingSinkConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.s3RecordingSinkConfiguration"></a>

```go
func S3RecordingSinkConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationElements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElements">DataAwsccChimeMediaInsightsPipelineConfigurationElements</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat">RecordingFileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `RecordingFileFormat`<sup>Required</sup> <a name="RecordingFileFormat" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.recordingFileFormat"></a>

```go
func RecordingFileFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled">Disabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.rules"></a>

```go
func Rules() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords">Keywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate">Negate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.keywords"></a>

```go
func Keywords() *[]*string
```

- *Type:* *[]*string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.negate"></a>

```go
func Negate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get"></a>

```go
func Get(index *f64) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration">IssueDetectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration">KeywordMatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration">SentimentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssueDetectionConfiguration`<sup>Required</sup> <a name="IssueDetectionConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.issueDetectionConfiguration"></a>

```go
func IssueDetectionConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference</a>

---

##### `KeywordMatchConfiguration`<sup>Required</sup> <a name="KeywordMatchConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.keywordMatchConfiguration"></a>

```go
func KeywordMatchConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference</a>

---

##### `SentimentConfiguration`<sup>Required</sup> <a name="SentimentConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.sentimentConfiguration"></a>

```go
func SentimentConfiguration() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType">SentimentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod">TimePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `SentimentType`<sup>Required</sup> <a name="SentimentType" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.sentimentType"></a>

```go
func SentimentType() *string
```

- *Type:* *string

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.timePeriod"></a>

```go
func TimePeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration">DataAwsccChimeMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration</a>

---


### DataAwsccChimeMediaInsightsPipelineConfigurationTagsList <a name="DataAwsccChimeMediaInsightsPipelineConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccChimeMediaInsightsPipelineConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference <a name="DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccchimemediainsightspipelineconfiguration"

dataawsccchimemediainsightspipelineconfiguration.NewDataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags">DataAwsccChimeMediaInsightsPipelineConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccChimeMediaInsightsPipelineConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaInsightsPipelineConfiguration.DataAwsccChimeMediaInsightsPipelineConfigurationTags">DataAwsccChimeMediaInsightsPipelineConfigurationTags</a>

---



