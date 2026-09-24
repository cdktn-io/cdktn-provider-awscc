# `dataAwsccSagemakerClusterSchedulerConfig` Submodule <a name="`dataAwsccSagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerClusterSchedulerConfig <a name="DataAwsccSagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.NewDataAwsccSagemakerClusterSchedulerConfig(scope Construct, id *string, config DataAwsccSagemakerClusterSchedulerConfigConfig) DataAwsccSagemakerClusterSchedulerConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig">DataAwsccSagemakerClusterSchedulerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig">DataAwsccSagemakerClusterSchedulerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerClusterSchedulerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">ClusterSchedulerConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">ClusterSchedulerConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">ClusterSchedulerConfigVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.schedulerConfig">SchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList">DataAwsccSagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `ClusterSchedulerConfigArn`<sup>Required</sup> <a name="ClusterSchedulerConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```go
func ClusterSchedulerConfigArn() *string
```

- *Type:* *string

---

##### `ClusterSchedulerConfigId`<sup>Required</sup> <a name="ClusterSchedulerConfigId" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```go
func ClusterSchedulerConfigId() *string
```

- *Type:* *string

---

##### `ClusterSchedulerConfigVersion`<sup>Required</sup> <a name="ClusterSchedulerConfigVersion" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```go
func ClusterSchedulerConfigVersion() *f64
```

- *Type:* *f64

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchedulerConfig`<sup>Required</sup> <a name="SchedulerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```go
func SchedulerConfig() DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tags"></a>

```go
func Tags() DataAwsccSagemakerClusterSchedulerConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList">DataAwsccSagemakerClusterSchedulerConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerClusterSchedulerConfigConfig <a name="DataAwsccSagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

&dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_cluster_scheduler_config#id DataAwsccSagemakerClusterSchedulerConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

&dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig {

}
```


### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

&dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses {

}
```


### DataAwsccSagemakerClusterSchedulerConfigTags <a name="DataAwsccSagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

&dataawsccsagemakerclusterschedulerconfig.DataAwsccSagemakerClusterSchedulerConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.NewDataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">FairShare</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">IdleResourceSharing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">PriorityClasses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FairShare`<sup>Required</sup> <a name="FairShare" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```go
func FairShare() *string
```

- *Type:* *string

---

##### `IdleResourceSharing`<sup>Required</sup> <a name="IdleResourceSharing" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```go
func IdleResourceSharing() *string
```

- *Type:* *string

---

##### `PriorityClasses`<sup>Required</sup> <a name="PriorityClasses" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```go
func PriorityClasses() DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfig</a>

---


### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.NewDataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.NewDataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">DataAwsccSagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>

---


### DataAwsccSagemakerClusterSchedulerConfigTagsList <a name="DataAwsccSagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.NewDataAwsccSagemakerClusterSchedulerConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerClusterSchedulerConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference <a name="DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerclusterschedulerconfig"

dataawsccsagemakerclusterschedulerconfig.NewDataAwsccSagemakerClusterSchedulerConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags">DataAwsccSagemakerClusterSchedulerConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerClusterSchedulerConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerClusterSchedulerConfig.DataAwsccSagemakerClusterSchedulerConfigTags">DataAwsccSagemakerClusterSchedulerConfigTags</a>

---



