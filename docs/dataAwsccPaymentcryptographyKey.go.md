# `dataAwsccPaymentcryptographyKey` Submodule <a name="`dataAwsccPaymentcryptographyKey` Submodule" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPaymentcryptographyKey <a name="DataAwsccPaymentcryptographyKey" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/paymentcryptography_key awscc_paymentcryptography_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKey(scope Construct, id *string, config DataAwsccPaymentcryptographyKeyConfig) DataAwsccPaymentcryptographyKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig">DataAwsccPaymentcryptographyKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig">DataAwsccPaymentcryptographyKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPaymentcryptographyKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKey_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPaymentcryptographyKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPaymentcryptographyKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPaymentcryptographyKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPaymentcryptographyKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.deriveKeyUsage">DeriveKeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.exportable">Exportable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyAttributes">KeyAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyCheckValueAlgorithm">KeyCheckValueAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyIdentifier">KeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyOrigin">KeyOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyState">KeyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationRegions">ReplicationRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationStatus">ReplicationStatus</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap">DataAwsccPaymentcryptographyKeyReplicationStatusMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList">DataAwsccPaymentcryptographyKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DeriveKeyUsage`<sup>Required</sup> <a name="DeriveKeyUsage" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.deriveKeyUsage"></a>

```go
func DeriveKeyUsage() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.exportable"></a>

```go
func Exportable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KeyAttributes`<sup>Required</sup> <a name="KeyAttributes" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyAttributes"></a>

```go
func KeyAttributes() DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference</a>

---

##### `KeyCheckValueAlgorithm`<sup>Required</sup> <a name="KeyCheckValueAlgorithm" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyCheckValueAlgorithm"></a>

```go
func KeyCheckValueAlgorithm() *string
```

- *Type:* *string

---

##### `KeyIdentifier`<sup>Required</sup> <a name="KeyIdentifier" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyIdentifier"></a>

```go
func KeyIdentifier() *string
```

- *Type:* *string

---

##### `KeyOrigin`<sup>Required</sup> <a name="KeyOrigin" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyOrigin"></a>

```go
func KeyOrigin() *string
```

- *Type:* *string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.keyState"></a>

```go
func KeyState() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `ReplicationRegions`<sup>Required</sup> <a name="ReplicationRegions" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationRegions"></a>

```go
func ReplicationRegions() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicationStatus`<sup>Required</sup> <a name="ReplicationStatus" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.replicationStatus"></a>

```go
func ReplicationStatus() DataAwsccPaymentcryptographyKeyReplicationStatusMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap">DataAwsccPaymentcryptographyKeyReplicationStatusMap</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tags"></a>

```go
func Tags() DataAwsccPaymentcryptographyKeyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList">DataAwsccPaymentcryptographyKeyTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPaymentcryptographyKeyConfig <a name="DataAwsccPaymentcryptographyKeyConfig" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

&dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKeyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/paymentcryptography_key#id DataAwsccPaymentcryptographyKey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPaymentcryptographyKeyKeyAttributes <a name="DataAwsccPaymentcryptographyKeyKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

&dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKeyKeyAttributes {

}
```


### DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse <a name="DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

&dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse {

}
```


### DataAwsccPaymentcryptographyKeyReplicationStatus <a name="DataAwsccPaymentcryptographyKeyReplicationStatus" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

&dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKeyReplicationStatus {

}
```


### DataAwsccPaymentcryptographyKeyTags <a name="DataAwsccPaymentcryptographyKeyTags" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

&dataawsccpaymentcryptographykey.DataAwsccPaymentcryptographyKeyTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference <a name="DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt">Decrypt</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey">DeriveKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt">Encrypt</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate">Generate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions">NoRestrictions</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign">Sign</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap">Unwrap</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify">Verify</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap">Wrap</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Decrypt`<sup>Required</sup> <a name="Decrypt" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt"></a>

```go
func Decrypt() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeriveKey`<sup>Required</sup> <a name="DeriveKey" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey"></a>

```go
func DeriveKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt"></a>

```go
func Encrypt() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Generate`<sup>Required</sup> <a name="Generate" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate"></a>

```go
func Generate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NoRestrictions`<sup>Required</sup> <a name="NoRestrictions" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions"></a>

```go
func NoRestrictions() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Sign`<sup>Required</sup> <a name="Sign" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign"></a>

```go
func Sign() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Unwrap`<sup>Required</sup> <a name="Unwrap" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap"></a>

```go
func Unwrap() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify"></a>

```go
func Verify() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Wrap`<sup>Required</sup> <a name="Wrap" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap"></a>

```go
func Wrap() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---


### DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference <a name="DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKeyKeyAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass">KeyClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse">KeyModesOfUse</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes">DataAwsccPaymentcryptographyKeyKeyAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `KeyClass`<sup>Required</sup> <a name="KeyClass" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass"></a>

```go
func KeyClass() *string
```

- *Type:* *string

---

##### `KeyModesOfUse`<sup>Required</sup> <a name="KeyModesOfUse" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse"></a>

```go
func KeyModesOfUse() DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">DataAwsccPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage"></a>

```go
func KeyUsage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPaymentcryptographyKeyKeyAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyKeyAttributes">DataAwsccPaymentcryptographyKeyKeyAttributes</a>

---


### DataAwsccPaymentcryptographyKeyReplicationStatusMap <a name="DataAwsccPaymentcryptographyKeyReplicationStatusMap" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKeyReplicationStatusMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPaymentcryptographyKeyReplicationStatusMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.get"></a>

```go
func Get(key *string) DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference <a name="DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKeyReplicationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus">DataAwsccPaymentcryptographyKeyReplicationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPaymentcryptographyKeyReplicationStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyReplicationStatus">DataAwsccPaymentcryptographyKeyReplicationStatus</a>

---


### DataAwsccPaymentcryptographyKeyTagsList <a name="DataAwsccPaymentcryptographyKeyTagsList" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKeyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccPaymentcryptographyKeyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.get"></a>

```go
func Get(index *f64) DataAwsccPaymentcryptographyKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccPaymentcryptographyKeyTagsOutputReference <a name="DataAwsccPaymentcryptographyKeyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpaymentcryptographykey"

dataawsccpaymentcryptographykey.NewDataAwsccPaymentcryptographyKeyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccPaymentcryptographyKeyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags">DataAwsccPaymentcryptographyKeyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPaymentcryptographyKeyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPaymentcryptographyKey.DataAwsccPaymentcryptographyKeyTags">DataAwsccPaymentcryptographyKeyTags</a>

---



