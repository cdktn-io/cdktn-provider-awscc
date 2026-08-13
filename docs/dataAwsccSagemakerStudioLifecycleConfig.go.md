# `dataAwsccSagemakerStudioLifecycleConfig` Submodule <a name="`dataAwsccSagemakerStudioLifecycleConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerStudioLifecycleConfig <a name="DataAwsccSagemakerStudioLifecycleConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_studio_lifecycle_config awscc_sagemaker_studio_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.NewDataAwsccSagemakerStudioLifecycleConfig(scope Construct, id *string, config DataAwsccSagemakerStudioLifecycleConfigConfig) DataAwsccSagemakerStudioLifecycleConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig">DataAwsccSagemakerStudioLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig">DataAwsccSagemakerStudioLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerStudioLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.DataAwsccSagemakerStudioLifecycleConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.DataAwsccSagemakerStudioLifecycleConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.DataAwsccSagemakerStudioLifecycleConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.DataAwsccSagemakerStudioLifecycleConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerStudioLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerStudioLifecycleConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerStudioLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_studio_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerStudioLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType">StudioLifecycleConfigAppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigArn">StudioLifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent">StudioLifecycleConfigContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigName">StudioLifecycleConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList">DataAwsccSagemakerStudioLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `StudioLifecycleConfigAppType`<sup>Required</sup> <a name="StudioLifecycleConfigAppType" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType"></a>

```go
func StudioLifecycleConfigAppType() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigArn`<sup>Required</sup> <a name="StudioLifecycleConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigArn"></a>

```go
func StudioLifecycleConfigArn() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigContent`<sup>Required</sup> <a name="StudioLifecycleConfigContent" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent"></a>

```go
func StudioLifecycleConfigContent() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigName`<sup>Required</sup> <a name="StudioLifecycleConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.studioLifecycleConfigName"></a>

```go
func StudioLifecycleConfigName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tags"></a>

```go
func Tags() DataAwsccSagemakerStudioLifecycleConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList">DataAwsccSagemakerStudioLifecycleConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerStudioLifecycleConfigConfig <a name="DataAwsccSagemakerStudioLifecycleConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

&dataawsccsagemakerstudiolifecycleconfig.DataAwsccSagemakerStudioLifecycleConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_studio_lifecycle_config#id DataAwsccSagemakerStudioLifecycleConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerStudioLifecycleConfigTags <a name="DataAwsccSagemakerStudioLifecycleConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

&dataawsccsagemakerstudiolifecycleconfig.DataAwsccSagemakerStudioLifecycleConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerStudioLifecycleConfigTagsList <a name="DataAwsccSagemakerStudioLifecycleConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.NewDataAwsccSagemakerStudioLifecycleConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerStudioLifecycleConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference <a name="DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerstudiolifecycleconfig"

dataawsccsagemakerstudiolifecycleconfig.NewDataAwsccSagemakerStudioLifecycleConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags">DataAwsccSagemakerStudioLifecycleConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerStudioLifecycleConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerStudioLifecycleConfig.DataAwsccSagemakerStudioLifecycleConfigTags">DataAwsccSagemakerStudioLifecycleConfigTags</a>

---



