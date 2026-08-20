# `dataAwsccNetworkmanagerSiteToSiteVpnAttachment` Submodule <a name="`dataAwsccNetworkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachment <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment awscc_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachment(scope Construct, id *string, config DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig) DataAwsccNetworkmanagerSiteToSiteVpnAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors">LastModificationErrors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">VpnConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```go
func EdgeLocation() *string
```

- *Type:* *string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors"></a>

```go
func LastModificationErrors() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName"></a>

```go
func NetworkFunctionGroupName() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `ProposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange"></a>

```go
func ProposedNetworkFunctionGroupChange() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `ProposedSegmentChange`<sup>Required</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange"></a>

```go
func ProposedSegmentChange() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel"></a>

```go
func RoutingPolicyLabel() *string
```

- *Type:* *string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `VpnConnectionArn`<sup>Required</sup> <a name="VpnConnectionArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```go
func VpnConnectionArn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

&dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#id DataAwsccNetworkmanagerSiteToSiteVpnAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

&dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange {

}
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

&dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags {

}
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

&dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange {

}
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

&dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags {

}
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

&dataawsccnetworkmanagersitetositevpnattachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```go
func NetworkFunctionGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagersitetositevpnattachment"

dataawsccnetworkmanagersitetositevpnattachment.NewDataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags</a>

---



