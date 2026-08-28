# `dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment` Submodule <a name="`dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment awscc_networkmanager_transit_gateway_route_table_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachment(scope Construct, id *string, config DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lastModificationErrors">LastModificationErrors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId">PeeringId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn">TransitGatewayRouteTableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.edgeLocation"></a>

```go
func EdgeLocation() *string
```

- *Type:* *string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.lastModificationErrors"></a>

```go
func LastModificationErrors() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.networkFunctionGroupName"></a>

```go
func NetworkFunctionGroupName() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `PeeringId`<sup>Required</sup> <a name="PeeringId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.peeringId"></a>

```go
func PeeringId() *string
```

- *Type:* *string

---

##### `ProposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedNetworkFunctionGroupChange"></a>

```go
func ProposedNetworkFunctionGroupChange() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `ProposedSegmentChange`<sup>Required</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.proposedSegmentChange"></a>

```go
func ProposedSegmentChange() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.routingPolicyLabel"></a>

```go
func RoutingPolicyLabel() *string
```

- *Type:* *string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList</a>

---

##### `TransitGatewayRouteTableArn`<sup>Required</sup> <a name="TransitGatewayRouteTableArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.transitGatewayRouteTableArn"></a>

```go
func TransitGatewayRouteTableArn() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

&dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_transit_gateway_route_table_attachment#id DataAwsccNetworkmanagerTransitGatewayRouteTableAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

&dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange {

}
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

&dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags {

}
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

&dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange {

}
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

&dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags {

}
```


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

&dataawsccnetworkmanagertransitgatewayroutetableattachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```go
func NetworkFunctionGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```go
func Tags() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkmanagertransitgatewayroutetableattachment"

dataawsccnetworkmanagertransitgatewayroutetableattachment.NewDataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerTransitGatewayRouteTableAttachment.DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags">DataAwsccNetworkmanagerTransitGatewayRouteTableAttachmentTags</a>

---



