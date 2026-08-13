# `dataAwsccBedrockagentcorePaymentCredentialProvider` Submodule <a name="`dataAwsccBedrockagentcorePaymentCredentialProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcorePaymentCredentialProvider <a name="DataAwsccBedrockagentcorePaymentCredentialProvider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProvider(scope Construct, id *string, config DataAwsccBedrockagentcorePaymentCredentialProviderConfig) DataAwsccBedrockagentcorePaymentCredentialProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig">DataAwsccBedrockagentcorePaymentCredentialProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig">DataAwsccBedrockagentcorePaymentCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockagentcorePaymentCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockagentcorePaymentCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcorePaymentCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput">ProviderConfigurationOutput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList">DataAwsccBedrockagentcorePaymentCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderArn"></a>

```go
func CredentialProviderArn() *string
```

- *Type:* *string

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor"></a>

```go
func CredentialProviderVendor() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfigurationInput`<sup>Required</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput"></a>

```go
func ProviderConfigurationInput() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a>

---

##### `ProviderConfigurationOutput`<sup>Required</sup> <a name="ProviderConfigurationOutput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput"></a>

```go
func ProviderConfigurationOutput() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tags"></a>

```go
func Tags() DataAwsccBedrockagentcorePaymentCredentialProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList">DataAwsccBedrockagentcorePaymentCredentialProviderTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcorePaymentCredentialProviderConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_credential_provider#id DataAwsccBedrockagentcorePaymentCredentialProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn {

}
```


### DataAwsccBedrockagentcorePaymentCredentialProviderTags <a name="DataAwsccBedrockagentcorePaymentCredentialProviderTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

&dataawsccbedrockagentcorepaymentcredentialprovider.DataAwsccBedrockagentcorePaymentCredentialProviderTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret">ApiKeySecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig">ApiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret">WalletSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig">WalletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">WalletSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```go
func ApiKeyId() *string
```

- *Type:* *string

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret"></a>

```go
func ApiKeySecret() *string
```

- *Type:* *string

---

##### `ApiKeySecretConfig`<sup>Required</sup> <a name="ApiKeySecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig"></a>

```go
func ApiKeySecretConfig() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a>

---

##### `ApiKeySecretSource`<sup>Required</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```go
func ApiKeySecretSource() *string
```

- *Type:* *string

---

##### `WalletSecret`<sup>Required</sup> <a name="WalletSecret" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret"></a>

```go
func WalletSecret() *string
```

- *Type:* *string

---

##### `WalletSecretConfig`<sup>Required</sup> <a name="WalletSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig"></a>

```go
func WalletSecretConfig() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a>

---

##### `WalletSecretSource`<sup>Required</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```go
func WalletSecretSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoinbaseCdpConfiguration`<sup>Required</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration"></a>

```go
func CoinbaseCdpConfiguration() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a>

---

##### `StripePrivyConfiguration`<sup>Required</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration"></a>

```go
func StripePrivyConfiguration() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret">AppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig">AppSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource">AppSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId">AuthorizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey">AuthorizationPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig">AuthorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret"></a>

```go
func AppSecret() *string
```

- *Type:* *string

---

##### `AppSecretConfig`<sup>Required</sup> <a name="AppSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig"></a>

```go
func AppSecretConfig() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a>

---

##### `AppSecretSource`<sup>Required</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```go
func AppSecretSource() *string
```

- *Type:* *string

---

##### `AuthorizationId`<sup>Required</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```go
func AuthorizationId() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKey`<sup>Required</sup> <a name="AuthorizationPrivateKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey"></a>

```go
func AuthorizationPrivateKey() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeyConfig`<sup>Required</sup> <a name="AuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig"></a>

```go
func AuthorizationPrivateKeyConfig() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a>

---

##### `AuthorizationPrivateKeySource`<sup>Required</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```go
func AuthorizationPrivateKeySource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn">ApiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey">ApiKeySecretJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn">WalletSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey">WalletSecretJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">WalletSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```go
func ApiKeyId() *string
```

- *Type:* *string

---

##### `ApiKeySecretArn`<sup>Required</sup> <a name="ApiKeySecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn"></a>

```go
func ApiKeySecretArn() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a>

---

##### `ApiKeySecretJsonKey`<sup>Required</sup> <a name="ApiKeySecretJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey"></a>

```go
func ApiKeySecretJsonKey() *string
```

- *Type:* *string

---

##### `ApiKeySecretSource`<sup>Required</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```go
func ApiKeySecretSource() *string
```

- *Type:* *string

---

##### `WalletSecretArn`<sup>Required</sup> <a name="WalletSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn"></a>

```go
func WalletSecretArn() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a>

---

##### `WalletSecretJsonKey`<sup>Required</sup> <a name="WalletSecretJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey"></a>

```go
func WalletSecretJsonKey() *string
```

- *Type:* *string

---

##### `WalletSecretSource`<sup>Required</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```go
func WalletSecretSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoinbaseCdpConfiguration`<sup>Required</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration"></a>

```go
func CoinbaseCdpConfiguration() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a>

---

##### `StripePrivyConfiguration`<sup>Required</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration"></a>

```go
func StripePrivyConfiguration() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn">AppSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey">AppSecretJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource">AppSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId">AuthorizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn">AuthorizationPrivateKeyArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey">AuthorizationPrivateKeyJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecretArn`<sup>Required</sup> <a name="AppSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn"></a>

```go
func AppSecretArn() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a>

---

##### `AppSecretJsonKey`<sup>Required</sup> <a name="AppSecretJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey"></a>

```go
func AppSecretJsonKey() *string
```

- *Type:* *string

---

##### `AppSecretSource`<sup>Required</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```go
func AppSecretSource() *string
```

- *Type:* *string

---

##### `AuthorizationId`<sup>Required</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```go
func AuthorizationId() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeyArn`<sup>Required</sup> <a name="AuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn"></a>

```go
func AuthorizationPrivateKeyArn() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a>

---

##### `AuthorizationPrivateKeyJsonKey`<sup>Required</sup> <a name="AuthorizationPrivateKeyJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey"></a>

```go
func AuthorizationPrivateKeyJsonKey() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeySource`<sup>Required</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```go
func AuthorizationPrivateKeySource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderTagsList <a name="DataAwsccBedrockagentcorePaymentCredentialProviderTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBedrockagentcorePaymentCredentialProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockagentcorepaymentcredentialprovider"

dataawsccbedrockagentcorepaymentcredentialprovider.NewDataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags">DataAwsccBedrockagentcorePaymentCredentialProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBedrockagentcorePaymentCredentialProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags">DataAwsccBedrockagentcorePaymentCredentialProviderTags</a>

---



