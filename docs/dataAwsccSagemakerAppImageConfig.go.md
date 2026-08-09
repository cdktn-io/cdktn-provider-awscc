# `dataAwsccSagemakerAppImageConfig` Submodule <a name="`dataAwsccSagemakerAppImageConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAppImageConfig <a name="DataAwsccSagemakerAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_app_image_config awscc_sagemaker_app_image_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfig(scope Construct, id *string, config DataAwsccSagemakerAppImageConfigConfig) DataAwsccSagemakerAppImageConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig">DataAwsccSagemakerAppImageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig">DataAwsccSagemakerAppImageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerAppImageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerAppImageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAppImageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigArn">AppImageConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.codeEditorAppImageConfig">CodeEditorAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.jupyterLabAppImageConfig">JupyterLabAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.kernelGatewayImageConfig">KernelGatewayImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList">DataAwsccSagemakerAppImageConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AppImageConfigArn`<sup>Required</sup> <a name="AppImageConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigArn"></a>

```go
func AppImageConfigArn() *string
```

- *Type:* *string

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigName"></a>

```go
func AppImageConfigName() *string
```

- *Type:* *string

---

##### `CodeEditorAppImageConfig`<sup>Required</sup> <a name="CodeEditorAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.codeEditorAppImageConfig"></a>

```go
func CodeEditorAppImageConfig() DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a>

---

##### `JupyterLabAppImageConfig`<sup>Required</sup> <a name="JupyterLabAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.jupyterLabAppImageConfig"></a>

```go
func JupyterLabAppImageConfig() DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a>

---

##### `KernelGatewayImageConfig`<sup>Required</sup> <a name="KernelGatewayImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.kernelGatewayImageConfig"></a>

```go
func KernelGatewayImageConfig() DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tags"></a>

```go
func Tags() DataAwsccSagemakerAppImageConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList">DataAwsccSagemakerAppImageConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig {

}
```


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig {

}
```


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables {

}
```


### DataAwsccSagemakerAppImageConfigConfig <a name="DataAwsccSagemakerAppImageConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_app_image_config#id DataAwsccSagemakerAppImageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig {

}
```


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig {

}
```


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables {

}
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig {

}
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {

}
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs {

}
```


### DataAwsccSagemakerAppImageConfigTags <a name="DataAwsccSagemakerAppImageConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

&dataawsccsagemakerappimageconfig.DataAwsccSagemakerAppImageConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">ContainerEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```go
func ContainerArguments() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```go
func ContainerEntrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEnvironmentVariables`<sup>Required</sup> <a name="ContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```go
func ContainerEnvironmentVariables() DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig">ContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig"></a>

```go
func ContainerConfig() DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">ContainerEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```go
func ContainerArguments() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```go
func ContainerEntrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerEnvironmentVariables`<sup>Required</sup> <a name="ContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```go
func ContainerEnvironmentVariables() DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig">ContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig"></a>

```go
func ContainerConfig() DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid">DefaultGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid">DefaultUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultGid`<sup>Required</sup> <a name="DefaultGid" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```go
func DefaultGid() *f64
```

- *Type:* *f64

---

##### `DefaultUid`<sup>Required</sup> <a name="DefaultUid" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```go
func DefaultUid() *f64
```

- *Type:* *f64

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig">FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs">KernelSpecs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemConfig`<sup>Required</sup> <a name="FileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig"></a>

```go
func FileSystemConfig() DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a>

---

##### `KernelSpecs`<sup>Required</sup> <a name="KernelSpecs" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs"></a>

```go
func KernelSpecs() DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigTagsList <a name="DataAwsccSagemakerAppImageConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerAppImageConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerAppImageConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerAppImageConfigTagsOutputReference <a name="DataAwsccSagemakerAppImageConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakerappimageconfig"

dataawsccsagemakerappimageconfig.NewDataAwsccSagemakerAppImageConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerAppImageConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags">DataAwsccSagemakerAppImageConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerAppImageConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags">DataAwsccSagemakerAppImageConfigTags</a>

---



