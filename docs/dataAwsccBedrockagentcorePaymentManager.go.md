# `dataAwsccBedrockagentcorePaymentManager` Submodule <a name="`dataAwsccBedrockagentcorePaymentManager` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcorePaymentManager <a name="DataAwsccBedrockagentcorePaymentManager" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_manager awscc_bedrockagentcore_payment_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManager(scope Construct, id *string, config DataAwsccBedrockagentcorePaymentManagerConfig) DataAwsccBedrockagentcorePaymentManager
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig">DataAwsccBedrockagentcorePaymentManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig">DataAwsccBedrockagentcorePaymentManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentManager resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManager_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManager_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManager_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManager_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockagentcorePaymentManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockagentcorePaymentManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcorePaymentManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.paymentManagerArn">PaymentManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.paymentManagerId">PaymentManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList">DataAwsccBedrockagentcorePaymentManagerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.workloadIdentityDetails">WorkloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference">DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.authorizerConfiguration"></a>

```go
func AuthorizerConfiguration() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference</a>

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.authorizerType"></a>

```go
func AuthorizerType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PaymentManagerArn`<sup>Required</sup> <a name="PaymentManagerArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.paymentManagerArn"></a>

```go
func PaymentManagerArn() *string
```

- *Type:* *string

---

##### `PaymentManagerId`<sup>Required</sup> <a name="PaymentManagerId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.paymentManagerId"></a>

```go
func PaymentManagerId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.tags"></a>

```go
func Tags() DataAwsccBedrockagentcorePaymentManagerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList">DataAwsccBedrockagentcorePaymentManagerTagsList</a>

---

##### `WorkloadIdentityDetails`<sup>Required</sup> <a name="WorkloadIdentityDetails" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.workloadIdentityDetails"></a>

```go
func WorkloadIdentityDetails() DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference">DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManager.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration {

}
```


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer {

}
```


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {

}
```


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {

}
```


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {

}
```


### DataAwsccBedrockagentcorePaymentManagerConfig <a name="DataAwsccBedrockagentcorePaymentManagerConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_manager#id DataAwsccBedrockagentcorePaymentManager#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcorePaymentManagerTags <a name="DataAwsccBedrockagentcorePaymentManagerTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerTags {

}
```


### DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails <a name="DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

&dataawsccbedrockagentcorepaymentmanager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```go
func MatchValueString() *string
```

- *Type:* *string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```go
func MatchValueStringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```go
func ClaimMatchOperator() *string
```

- *Type:* *string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```go
func ClaimMatchValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```go
func AuthorizingClaimMatchValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```go
func InboundTokenClaimName() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```go
func InboundTokenClaimValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">CustomClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```go
func AllowedAudience() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```go
func AllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomClaims`<sup>Required</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```go
func CustomClaims() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```go
func CustomJwtAuthorizer() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration">DataAwsccBedrockagentcorePaymentManagerAuthorizerConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentManagerTagsList <a name="DataAwsccBedrockagentcorePaymentManagerTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcorePaymentManagerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcorePaymentManagerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcorePaymentManagerTagsOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcorePaymentManagerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTags">DataAwsccBedrockagentcorePaymentManagerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerTags">DataAwsccBedrockagentcorePaymentManagerTags</a>

---


### DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference <a name="DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentmanager"

dataawsccbedrockagentcorepaymentmanager.NewDataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">WorkloadIdentityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails">DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkloadIdentityArn`<sup>Required</sup> <a name="WorkloadIdentityArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```go
func WorkloadIdentityArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentManager.DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails">DataAwsccBedrockagentcorePaymentManagerWorkloadIdentityDetails</a>

---



