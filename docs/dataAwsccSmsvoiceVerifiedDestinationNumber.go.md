# `dataAwsccSmsvoiceVerifiedDestinationNumber` Submodule <a name="`dataAwsccSmsvoiceVerifiedDestinationNumber` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceVerifiedDestinationNumber <a name="DataAwsccSmsvoiceVerifiedDestinationNumber" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/smsvoice_verified_destination_number awscc_smsvoice_verified_destination_number}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.NewDataAwsccSmsvoiceVerifiedDestinationNumber(scope Construct, id *string, config DataAwsccSmsvoiceVerifiedDestinationNumberConfig) DataAwsccSmsvoiceVerifiedDestinationNumber
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig">DataAwsccSmsvoiceVerifiedDestinationNumberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig">DataAwsccSmsvoiceVerifiedDestinationNumberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.DataAwsccSmsvoiceVerifiedDestinationNumber_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.DataAwsccSmsvoiceVerifiedDestinationNumber_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.DataAwsccSmsvoiceVerifiedDestinationNumber_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.DataAwsccSmsvoiceVerifiedDestinationNumber_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSmsvoiceVerifiedDestinationNumber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSmsvoiceVerifiedDestinationNumber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSmsvoiceVerifiedDestinationNumber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/smsvoice_verified_destination_number#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceVerifiedDestinationNumber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber">DestinationPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList">DataAwsccSmsvoiceVerifiedDestinationNumberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn">VerifiedDestinationNumberArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId">VerifiedDestinationNumberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `DestinationPhoneNumber`<sup>Required</sup> <a name="DestinationPhoneNumber" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.destinationPhoneNumber"></a>

```go
func DestinationPhoneNumber() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tags"></a>

```go
func Tags() DataAwsccSmsvoiceVerifiedDestinationNumberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList">DataAwsccSmsvoiceVerifiedDestinationNumberTagsList</a>

---

##### `VerifiedDestinationNumberArn`<sup>Required</sup> <a name="VerifiedDestinationNumberArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberArn"></a>

```go
func VerifiedDestinationNumberArn() *string
```

- *Type:* *string

---

##### `VerifiedDestinationNumberId`<sup>Required</sup> <a name="VerifiedDestinationNumberId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.verifiedDestinationNumberId"></a>

```go
func VerifiedDestinationNumberId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumber.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceVerifiedDestinationNumberConfig <a name="DataAwsccSmsvoiceVerifiedDestinationNumberConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

&dataawsccsmsvoiceverifieddestinationnumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/smsvoice_verified_destination_number#id DataAwsccSmsvoiceVerifiedDestinationNumber#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceVerifiedDestinationNumberTags <a name="DataAwsccSmsvoiceVerifiedDestinationNumberTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

&dataawsccsmsvoiceverifieddestinationnumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceVerifiedDestinationNumberTagsList <a name="DataAwsccSmsvoiceVerifiedDestinationNumberTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.NewDataAwsccSmsvoiceVerifiedDestinationNumberTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSmsvoiceVerifiedDestinationNumberTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference <a name="DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsmsvoiceverifieddestinationnumber"

dataawsccsmsvoiceverifieddestinationnumber.NewDataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags">DataAwsccSmsvoiceVerifiedDestinationNumberTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSmsvoiceVerifiedDestinationNumberTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceVerifiedDestinationNumber.DataAwsccSmsvoiceVerifiedDestinationNumberTags">DataAwsccSmsvoiceVerifiedDestinationNumberTags</a>

---



