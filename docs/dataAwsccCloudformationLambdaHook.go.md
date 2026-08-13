# `dataAwsccCloudformationLambdaHook` Submodule <a name="`dataAwsccCloudformationLambdaHook` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationLambdaHook <a name="DataAwsccCloudformationLambdaHook" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook awscc_cloudformation_lambda_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHook(scope Construct, id *string, config DataAwsccCloudformationLambdaHookConfig) DataAwsccCloudformationLambdaHook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig">DataAwsccCloudformationLambdaHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig">DataAwsccCloudformationLambdaHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHook_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudformationLambdaHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudformationLambdaHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudformationLambdaHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationLambdaHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.autoUpdate">AutoUpdate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.failureMode">FailureMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookArn">HookArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookStatus">HookStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lambdaFunction">LambdaFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference">DataAwsccCloudformationLambdaHookLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.stackFilters">StackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference">DataAwsccCloudformationLambdaHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetFilters">TargetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference">DataAwsccCloudformationLambdaHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetOperations">TargetOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AutoUpdate`<sup>Required</sup> <a name="AutoUpdate" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.autoUpdate"></a>

```go
func AutoUpdate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `FailureMode`<sup>Required</sup> <a name="FailureMode" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.failureMode"></a>

```go
func FailureMode() *string
```

- *Type:* *string

---

##### `HookArn`<sup>Required</sup> <a name="HookArn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookArn"></a>

```go
func HookArn() *string
```

- *Type:* *string

---

##### `HookStatus`<sup>Required</sup> <a name="HookStatus" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.hookStatus"></a>

```go
func HookStatus() *string
```

- *Type:* *string

---

##### `LambdaFunction`<sup>Required</sup> <a name="LambdaFunction" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.lambdaFunction"></a>

```go
func LambdaFunction() *string
```

- *Type:* *string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.loggingConfig"></a>

```go
func LoggingConfig() DataAwsccCloudformationLambdaHookLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference">DataAwsccCloudformationLambdaHookLoggingConfigOutputReference</a>

---

##### `StackFilters`<sup>Required</sup> <a name="StackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.stackFilters"></a>

```go
func StackFilters() DataAwsccCloudformationLambdaHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference">DataAwsccCloudformationLambdaHookStackFiltersOutputReference</a>

---

##### `TargetFilters`<sup>Required</sup> <a name="TargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetFilters"></a>

```go
func TargetFilters() DataAwsccCloudformationLambdaHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference">DataAwsccCloudformationLambdaHookTargetFiltersOutputReference</a>

---

##### `TargetOperations`<sup>Required</sup> <a name="TargetOperations" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.targetOperations"></a>

```go
func TargetOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationLambdaHookConfig <a name="DataAwsccCloudformationLambdaHookConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_lambda_hook#id DataAwsccCloudformationLambdaHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationLambdaHookLoggingConfig <a name="DataAwsccCloudformationLambdaHookLoggingConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookLoggingConfig {

}
```


### DataAwsccCloudformationLambdaHookStackFilters <a name="DataAwsccCloudformationLambdaHookStackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookStackFilters {

}
```


### DataAwsccCloudformationLambdaHookStackFiltersStackNames <a name="DataAwsccCloudformationLambdaHookStackFiltersStackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookStackFiltersStackNames {

}
```


### DataAwsccCloudformationLambdaHookStackFiltersStackRoles <a name="DataAwsccCloudformationLambdaHookStackFiltersStackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles {

}
```


### DataAwsccCloudformationLambdaHookTargetFilters <a name="DataAwsccCloudformationLambdaHookTargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookTargetFilters {

}
```


### DataAwsccCloudformationLambdaHookTargetFiltersTargets <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

&dataawscccloudformationlambdahook.DataAwsccCloudformationLambdaHookTargetFiltersTargets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationLambdaHookLoggingConfigOutputReference <a name="DataAwsccCloudformationLambdaHookLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationLambdaHookLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn">LogRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig">DataAwsccCloudformationLambdaHookLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogRoleArn`<sup>Required</sup> <a name="LogRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.logRoleArn"></a>

```go
func LogRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationLambdaHookLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookLoggingConfig">DataAwsccCloudformationLambdaHookLoggingConfig</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookStackFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationLambdaHookStackFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria">FilteringCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackNames">StackNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackRoles">StackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters">DataAwsccCloudformationLambdaHookStackFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilteringCriteria`<sup>Required</sup> <a name="FilteringCriteria" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.filteringCriteria"></a>

```go
func FilteringCriteria() *string
```

- *Type:* *string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackNames"></a>

```go
func StackNames() DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference</a>

---

##### `StackRoles`<sup>Required</sup> <a name="StackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.stackRoles"></a>

```go
func StackRoles() DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationLambdaHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFilters">DataAwsccCloudformationLambdaHookStackFilters</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames">DataAwsccCloudformationLambdaHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationLambdaHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackNames">DataAwsccCloudformationLambdaHookStackFiltersStackNames</a>

---


### DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference <a name="DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles">DataAwsccCloudformationLambdaHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationLambdaHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookStackFiltersStackRoles">DataAwsccCloudformationLambdaHookStackFiltersStackRoles</a>

---


### DataAwsccCloudformationLambdaHookTargetFiltersOutputReference <a name="DataAwsccCloudformationLambdaHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookTargetFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationLambdaHookTargetFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints">InvocationPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targetNames">TargetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList">DataAwsccCloudformationLambdaHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters">DataAwsccCloudformationLambdaHookTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InvocationPoints`<sup>Required</sup> <a name="InvocationPoints" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.invocationPoints"></a>

```go
func InvocationPoints() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNames`<sup>Required</sup> <a name="TargetNames" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targetNames"></a>

```go
func TargetNames() *[]*string
```

- *Type:* *[]*string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.targets"></a>

```go
func Targets() DataAwsccCloudformationLambdaHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList">DataAwsccCloudformationLambdaHookTargetFiltersTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationLambdaHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFilters">DataAwsccCloudformationLambdaHookTargetFilters</a>

---


### DataAwsccCloudformationLambdaHookTargetFiltersTargetsList <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookTargetFiltersTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudformationLambdaHookTargetFiltersTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference <a name="DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationlambdahook"

dataawscccloudformationlambdahook.NewDataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint">InvocationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets">DataAwsccCloudformationLambdaHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InvocationPoint`<sup>Required</sup> <a name="InvocationPoint" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```go
func InvocationPoint() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationLambdaHookTargetFiltersTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationLambdaHook.DataAwsccCloudformationLambdaHookTargetFiltersTargets">DataAwsccCloudformationLambdaHookTargetFiltersTargets</a>

---



