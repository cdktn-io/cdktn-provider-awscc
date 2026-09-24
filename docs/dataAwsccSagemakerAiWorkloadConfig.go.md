# `dataAwsccSagemakerAiWorkloadConfig` Submodule <a name="`dataAwsccSagemakerAiWorkloadConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAiWorkloadConfig <a name="DataAwsccSagemakerAiWorkloadConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config awscc_sagemaker_ai_workload_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfig(scope Construct, id *string, config DataAwsccSagemakerAiWorkloadConfigConfig) DataAwsccSagemakerAiWorkloadConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig">DataAwsccSagemakerAiWorkloadConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig">DataAwsccSagemakerAiWorkloadConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerAiWorkloadConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerAiWorkloadConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerAiWorkloadConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAiWorkloadConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigArn">AiWorkloadConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigName">AiWorkloadConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigs">AiWorkloadConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.datasetConfig">DatasetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList">DataAwsccSagemakerAiWorkloadConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AiWorkloadConfigArn`<sup>Required</sup> <a name="AiWorkloadConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigArn"></a>

```go
func AiWorkloadConfigArn() *string
```

- *Type:* *string

---

##### `AiWorkloadConfigName`<sup>Required</sup> <a name="AiWorkloadConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigName"></a>

```go
func AiWorkloadConfigName() *string
```

- *Type:* *string

---

##### `AiWorkloadConfigs`<sup>Required</sup> <a name="AiWorkloadConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.aiWorkloadConfigs"></a>

```go
func AiWorkloadConfigs() DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DatasetConfig`<sup>Required</sup> <a name="DatasetConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.datasetConfig"></a>

```go
func DatasetConfig() DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tags"></a>

```go
func Tags() DataAwsccSagemakerAiWorkloadConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList">DataAwsccSagemakerAiWorkloadConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs {

}
```


### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec {

}
```


### DataAwsccSagemakerAiWorkloadConfigConfig <a name="DataAwsccSagemakerAiWorkloadConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_ai_workload_config#id DataAwsccSagemakerAiWorkloadConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAiWorkloadConfigDatasetConfig <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig {

}
```


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig {

}
```


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource {

}
```


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource {

}
```


### DataAwsccSagemakerAiWorkloadConfigTags <a name="DataAwsccSagemakerAiWorkloadConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

&dataawsccsagemakeraiworkloadconfig.DataAwsccSagemakerAiWorkloadConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec">WorkloadSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkloadSpec`<sup>Required</sup> <a name="WorkloadSpec" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.workloadSpec"></a>

```go
func WorkloadSpec() DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigs</a>

---


### DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline">Inline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Inline`<sup>Required</sup> <a name="Inline" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.inline"></a>

```go
func Inline() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec">DataAwsccSagemakerAiWorkloadConfigAiWorkloadConfigsWorkloadSpec</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSource</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceS3DataSource</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.dataSource"></a>

```go
func DataSource() DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigDataSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfig</a>

---


### DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.inputDataConfig"></a>

```go
func InputDataConfig() DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList">DataAwsccSagemakerAiWorkloadConfigDatasetConfigInputDataConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigDatasetConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigDatasetConfig">DataAwsccSagemakerAiWorkloadConfigDatasetConfig</a>

---


### DataAwsccSagemakerAiWorkloadConfigTagsList <a name="DataAwsccSagemakerAiWorkloadConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAiWorkloadConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAiWorkloadConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAiWorkloadConfigTagsOutputReference <a name="DataAwsccSagemakerAiWorkloadConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakeraiworkloadconfig"

dataawsccsagemakeraiworkloadconfig.NewDataAwsccSagemakerAiWorkloadConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAiWorkloadConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags">DataAwsccSagemakerAiWorkloadConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAiWorkloadConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAiWorkloadConfig.DataAwsccSagemakerAiWorkloadConfigTags">DataAwsccSagemakerAiWorkloadConfigTags</a>

---



