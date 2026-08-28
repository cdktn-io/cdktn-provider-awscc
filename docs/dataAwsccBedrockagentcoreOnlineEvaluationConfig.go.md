# `dataAwsccBedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`dataAwsccBedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfig(scope Construct, id *string, config DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig) DataAwsccBedrockagentcoreOnlineEvaluationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig">ClusteringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">DataSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">EvaluationExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluators">Evaluators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.executionStatus">ExecutionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.insights">Insights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">OnlineEvaluationConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">OnlineEvaluationConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">OnlineEvaluationConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ClusteringConfig`<sup>Required</sup> <a name="ClusteringConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig"></a>

```go
func ClusteringConfig() DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceConfig`<sup>Required</sup> <a name="DataSourceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```go
func DataSourceConfig() DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EvaluationExecutionRoleArn`<sup>Required</sup> <a name="EvaluationExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```go
func EvaluationExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Evaluators`<sup>Required</sup> <a name="Evaluators" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluators"></a>

```go
func Evaluators() DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a>

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```go
func ExecutionStatus() *string
```

- *Type:* *string

---

##### `Insights`<sup>Required</sup> <a name="Insights" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.insights"></a>

```go
func Insights() DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList</a>

---

##### `OnlineEvaluationConfigArn`<sup>Required</sup> <a name="OnlineEvaluationConfigArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```go
func OnlineEvaluationConfigArn() *string
```

- *Type:* *string

---

##### `OnlineEvaluationConfigId`<sup>Required</sup> <a name="OnlineEvaluationConfigId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```go
func OnlineEvaluationConfigId() *string
```

- *Type:* *string

---

##### `OnlineEvaluationConfigName`<sup>Required</sup> <a name="OnlineEvaluationConfigName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```go
func OnlineEvaluationConfigName() *string
```

- *Type:* *string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```go
func OutputConfig() DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```go
func Rule() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```go
func Tags() DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_online_evaluation_config#id DataAwsccBedrockagentcoreOnlineEvaluationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRule <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig {

}
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTags <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

&dataawsccbedrockagentcoreonlineevaluationconfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies">Frequencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Frequencies`<sup>Required</sup> <a name="Frequencies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies"></a>

```go
func Frequencies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">LogGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">ServiceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNames`<sup>Required</sup> <a name="LogGroupNames" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```go
func LogGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceNames`<sup>Required</sup> <a name="ServiceNames" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```go
func ServiceNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId">EvaluatorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvaluatorId`<sup>Required</sup> <a name="EvaluatorId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId"></a>

```go
func EvaluatorId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId">InsightId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InsightId`<sup>Required</sup> <a name="InsightId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId"></a>

```go
func InsightId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchConfig`<sup>Required</sup> <a name="CloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```go
func CloudwatchConfig() DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value"></a>

```go
func Value() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue">BooleanValue</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue"></a>

```go
func BooleanValue() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">SamplingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">SessionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule">DataAwsccBedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters"></a>

```go
func Filters() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a>

---

##### `SamplingConfig`<sup>Required</sup> <a name="SamplingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```go
func SamplingConfig() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a>

---

##### `SessionConfig`<sup>Required</sup> <a name="SessionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```go
func SessionConfig() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule">DataAwsccBedrockagentcoreOnlineEvaluationConfigRule</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```go
func SamplingPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```go
func SessionTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcoreonlineevaluationconfig"

dataawsccbedrockagentcoreonlineevaluationconfig.NewDataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags">DataAwsccBedrockagentcoreOnlineEvaluationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcoreOnlineEvaluationConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags">DataAwsccBedrockagentcoreOnlineEvaluationConfigTags</a>

---



