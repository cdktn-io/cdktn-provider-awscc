# `dataAwsccGlobalacceleratorCrossAccountAttachment` Submodule <a name="`dataAwsccGlobalacceleratorCrossAccountAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachment <a name="DataAwsccGlobalacceleratorCrossAccountAttachment" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.NewDataAwsccGlobalacceleratorCrossAccountAttachment(scope Construct, id *string, config DataAwsccGlobalacceleratorCrossAccountAttachmentConfig) DataAwsccGlobalacceleratorCrossAccountAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig">DataAwsccGlobalacceleratorCrossAccountAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig">DataAwsccGlobalacceleratorCrossAccountAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGlobalacceleratorCrossAccountAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.attachmentArn">AttachmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList">DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList">DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AttachmentArn`<sup>Required</sup> <a name="AttachmentArn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.attachmentArn"></a>

```go
func AttachmentArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.resources"></a>

```go
func Resources() DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList">DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tags"></a>

```go
func Tags() DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList">DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachmentConfig <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

&dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment#id DataAwsccGlobalacceleratorCrossAccountAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlobalacceleratorCrossAccountAttachmentResources <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResources" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

&dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources {

}
```


### DataAwsccGlobalacceleratorCrossAccountAttachmentTags <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTags" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

&dataawsccglobalacceleratorcrossaccountattachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.NewDataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.NewDataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources">DataAwsccGlobalacceleratorCrossAccountAttachmentResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlobalacceleratorCrossAccountAttachmentResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources">DataAwsccGlobalacceleratorCrossAccountAttachmentResources</a>

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.NewDataAwsccGlobalacceleratorCrossAccountAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglobalacceleratorcrossaccountattachment"

dataawsccglobalacceleratorcrossaccountattachment.NewDataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags">DataAwsccGlobalacceleratorCrossAccountAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlobalacceleratorCrossAccountAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags">DataAwsccGlobalacceleratorCrossAccountAttachmentTags</a>

---



